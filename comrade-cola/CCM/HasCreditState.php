<?php

class HasCreditState implements StateInterface
{
  private $ccMachine;

  function __construct($ccMachine)
  {
    $this->ccMachine = $ccMachine;
  }

  public function insertCredit()
  {
    echo "Patience Comrade. You cannot insert credits at this time.\n<br />";
    $this->returnCredit();
  }

  public function returnCredit()
  {
    echo "Your credits are being returned.\n<br />";
    $this->ccMachine->state = $this->ccMachine->noCreditState;
  }

  public function customerChoice()
  {
    echo "Excellent choice Comrade...\n<br />";
    $randomWinner = rand(1,10);
    if( ($randomWinner == 1) && ($this->ccMachine->inventory >1))
    {
      $this->ccMachine->state = $this->ccMachine->promotionalState;
    }
    else
    {
      $this->ccMachine->state = $this->ccMachine->soldState;
    }
    $this->ccMachine->dispense();
  }

  public function dispense()
  {
    echo "No Comrade Cola yet. You must make a choice first.\n<br />";
  }

  public function __toString()
  {
    return "State: HasCreditState.";
  }

}
