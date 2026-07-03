# Database Guide

This page introduces the MolScience database workflow.

## Purpose

The database is used to organize molecule-related information, experimental records, computed properties, and model-ready data. Its value is not only storing data, but also keeping sources, field meanings, and quality status traceable.

## Basic principles

- Keep field names consistent.
- Record a source for every data item, such as a paper, webpage, experimental record, or computation script.
- Always include units for numeric values and keep conversion rules when units are standardized.
- Mark missing, uncertain, or not-applicable information explicitly.
- Record the reason for data changes instead of overwriting values without context.

## Common fields

- Molecular identifiers: name, SMILES, InChI, CAS number, or internal ID.
- Source information: paper, database, experimental record, contributor, and access date.
- Property fields: property name, value, unit, condition, and measurement method.
- Quality fields: checked status, confidence, outlier notes, and open questions.

## Data review checklist

1. The molecular identifier is unique and verifiable.
2. Units are clear and can be standardized if needed.
3. The data source is specific enough.
4. Duplicates, conflicts, and outliers have been checked.
5. Uncertainty and limitations are recorded.
