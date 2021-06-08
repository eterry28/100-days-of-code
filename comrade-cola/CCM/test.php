<?php
spl_autoload_register(function ($class) {
    include $class . '.php';
});


echo "<h1>*** V2 ***</h1>";
$iccMachine = new ImprovedComradeColaMachine(5);
echo $iccMachine;

$iccMachine->insertCredit();
$iccMachine->customerChoice();

echo $iccMachine;

$iccMachine->insertCredit();
$iccMachine->returnCredit();
$iccMachine->customerChoice();

echo $iccMachine;

$iccMachine->dispense();
$iccMachine->insertCredit();
$iccMachine->customerChoice();

echo $iccMachine;

$iccMachine->insertCredit();
$iccMachine->customerChoice();

echo $iccMachine;



echo "<h1>*** LOOP TEST ***</h1>";
$inventory = 20;
$iccMachine = new ImprovedComradeColaMachine($inventory);

echo $iccMachine;

for($i = 0; $i < $inventory; $i++)
{

    $iccMachine->insertCredit();
    $iccMachine->customerChoice();

    echo $iccMachine;
}
