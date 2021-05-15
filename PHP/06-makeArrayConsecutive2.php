function makeArrayConsecutive2($statues) {
  sort ( $statues, SORT_NUMERIC );
  $missingStatues = 0;
  for($i = 0; $i <= count($statues)-2; $i ++) {
    if($statues[$i+1] - $statues[$i] != 1) 
      $missingStatues += $statues[$i+1] - $statues[$i] -1;
  }
  return $missingStatues;
}