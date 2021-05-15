function shapeArea($n) {
  $val = 1;
  for ($i = 2; $i <= $n; $i++ ) {
    $val = $val + (($i*4) - 4);
  }
  return $val;
}
