function computeAnswersPercentage (formInstance) {
  var answers = formInstance.answers
  var result = {}
  var optionQuantity = {}
  for (var multipleChoice of formInstance.multipleChoices) {
    result[multipleChoice.question] = {}
    optionQuantity[multipleChoice.question] = multipleChoice.options.length
    for (var option of multipleChoice.options) {
      result[multipleChoice.question][option] = 0
    }
  }
  var multipleChoiceAnswers = answers.map(answer => answer.multipleChoiceAnswers)
  for (var currentAnswer of multipleChoiceAnswers) {
    for (var multipleChoice of currentAnswer) {
      for (var currentAnswer of multipleChoice.answers) {
        result[multipleChoice.question][currentAnswer] += 1 / optionQuantity[multipleChoice.question]
      }
    }
  }
  return result
}

export { computeAnswersPercentage }