# Machine Learning Basics

This page introduces basic machine learning concepts used in MolScience. It helps new members understand how data enters a model and how to judge whether model results are reliable.

## Key concepts

- Dataset: a collection of data used for training, validation, or testing.
- Features: model inputs, such as molecular descriptors, fingerprints, molecular graphs, or experimental conditions.
- Labels: prediction targets, such as property values, classes, or experimental outcomes.
- Training and testing: the training set fits the model, while the test set estimates generalization.
- Model evaluation: metrics should match the task, such as error, accuracy, recall, or correlation.
- Overfitting and generalization: strong training performance with weak new-data performance usually means poor generalization.

## Notes for molecular machine learning

- Training and test sets should not contain duplicated or highly leaked data.
- Feature generation should be reproducible, with software versions or parameters recorded.
- When datasets are small, evaluation results may be unstable and should be interpreted carefully.
- Model conclusions should be checked against chemical context instead of relying only on metrics.

## First exercises

1. Read an existing dataset description and identify features, labels, and units.
2. Reproduce a simple model training workflow.
3. Compare training and test metrics to check for possible overfitting.
4. Document reproduction steps and questions in the docs or an issue.
