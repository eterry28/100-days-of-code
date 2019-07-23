<?php

class EmptyState implements StateInterface
{
  private $ccMachine;

  function __construct($ccMachine)
  {
    $this->ccMachine = $ccMachine;
  }

  public function insertCredit()
  {
    echo "Sorry Comrade. You can't insert credits because this machine is out of Comrade Cola.\n<br />";
  }

  public function returnCredit()
  {
    echo "There are no credits to return because sold out machines don't accept credits. Are you trying to cheat?\n<br />";
  }

  public function customerChoice()
  {
    echo "You've made a choice, but we are sold out of Comrade Cola. Are you trying to cheat?\n<br />";
  }

  public function dispense()
  {
    echo "No Comrade Cola yet. Sold out machines can't dispense colas. Did you try to hack us?\n<br />";
  }

  public function __toString()
  {
    return "State: EmptyState.";
  }

}
