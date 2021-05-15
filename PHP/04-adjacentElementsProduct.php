function adjacentElementsProduct($inputArray) {
  $adjacentProducts = [];
  for ($i = 0; $i <= count($inputArray)-2; $i++) {
    array_push($adjacentProducts, $inputArray[$i+1]*$inputArray[$i]);
  }
  return max($adjacentProducts);
}
