---
title: Building a Loan Prediction App with Databricks and PySpark
author: Christian Garcia
pubDatetime: 2025-06-03T16:00:00Z
slug: loan-prediction-databricks
featured: true
draft: false
tags:
  - PySpark
  - Databricks
  - FRED
  - BLS
  - Data Engineering
description:
  I'm building a loan prediction model using real economic data (FRED, BLS) in Databricks with PySpark.
  This blog will document my process step-by-step as I learn the tools and build something real.
---

## Motivation

As someone looking to transition into data engineering, I wanted to build a portfolio project that demonstrates real-world skills—not just basic Python scripts. I found an open role that uses **Databricks, PySpark, Terraform, and GitLab**, and I wanted to showcase my ability to use those tools effectively.

I also wanted the project to be relevant. Small businesses often struggle to get loans, and I thought: *what if I could build a simple app that predicts loan approval using real economic indicators like unemployment and inflation?*

## Project Overview

Here’s what I’m building:

- A loan prediction model trained on real data
- Ingests macroeconomic data from **FRED** and **BLS**
- Uses **PySpark** for transformations and modeling inside **Databricks**
- Saves data in Delta format for analysis
- Hosted frontend on my own VPS so others can try it out

I’ll be skipping Terraform for now since Databricks Community Edition doesn’t support the APIs Terraform needs. Instead, I’ll focus on getting things working manually first—then automate later if needed.

## Tools I’m Using

- 🧠 **Databricks Community Edition** — where I run my PySpark notebooks
- 🔗 **FRED API** — for unemployment and interest rate data
- 📊 **BLS API** — for CPI and labor force data
- 🧹 **PySpark** — for cleaning, joining, and transforming everything
- 🧪 **MLlib** — for training a classifier to predict loan approvals
- 🌐 **FastAPI (soon)** — to serve predictions
- 🖥️ **My VPS** — to host the app for demo purposes

## First Milestone: Ingesting FRED Data

I created a notebook in Databricks called `01_ingest_fred` and pulled monthly unemployment rate data (`UNRATE`) from FRED from 2019 to 2024. Here's a preview of the code:

```python
from fredapi import Fred
import pandas as pd

fred = Fred(api_key="my_api_key")
unemployment = fred.get_series('UNRATE', '2019-01-01', '2024-01-01')

df = unemployment.reset_index()
df.columns = ['date', 'unemployment_rate']
```

Then I converted it into a PySpark DataFrame and saved it as a Delta table for use later in model training.

```python
spark_df = spark.createDataFrame(df)
spark_df.write.format("delta").mode("overwrite").save("/tmp/fred/unrate")
```

This gave me my first raw data source in Delta format — a huge win.

## What’s Next

Here’s what I’ll tackle next:
	•	Pull in BLS data (e.g., CPI, employment stats)
	•	Upload a loan dataset (maybe SBA data)
	•	Join macro data with loan records
	•	Train and evaluate a PySpark model
	•	Build a simple frontend to use it

## Final Thoughts

This project is stretching me—I’m new to Databricks and PySpark—but it’s already paying off. I’ve learned more by building this out than I would have by reading docs or doing coding challenges. If you’re trying to learn data engineering, I highly recommend starting with a real-world dataset and building something end-to-end.

I’ll keep blogging as I make progress. Stay tuned.