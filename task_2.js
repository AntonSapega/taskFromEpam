function sort(firstValue, secondValue, thirdValue) {
    const result = [firstValue, secondValue, thirdValue].sort((prev, next) => {
      if (prev < next) {
        return -1
      }
    }).join(', ');
    return result;
  }