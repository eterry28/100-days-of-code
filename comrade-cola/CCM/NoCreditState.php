<<<<<<< HEAD
<?php

class NoCreditState implements StateInterface
{
  private $ccMachine;

  function __construct($ccMachine)
  {
    $this->ccMachine = $ccMachine;
  }

  public function insertCredit()
  {
    $this->ccMachine->state = $this->ccMachine->hasCreditState;
    echo "You place a loose credit in the machine. Your credit has been accepted.\n<br />";
  }

  public function returnCredit()
  {
    echo "You request a credit return, but haven't inserted any credits. Are you trying to cheat, Comrade?\n<br />";
  }

  public function customerChoice()
  {
    echo "You make a cola choice, but haven't inserted any credits. Are you trying to cheat, Comrade?\n<br />";
  }

  public function dispense()
  {
    echo "No Comrade Cola yet. You haven't inserted any credits.\n<br />";
  }

  public function __toString()
  {
    return "State: NoCreditState.";
  }

}
=======
<?php

class NoCreditState implements StateInterface
{
  private $ccMachine;

  function __construct($ccMachine)
  {
    $this->ccMachine = $ccMachine;
  }

  public function insertCredit()
  {
    $this->ccMachine->state = $this->ccMachine->hasCreditState;
    echo "You place a loose credit in the machine. Your credit has been accepted.\n<br />";
  }

  public function returnCredit()
  {
    echo "You request a credit return, but haven't inserted any credits. Are you trying to cheat, Comrade?\n<br />";
  }

  public function customerChoice()
  {
    echo "You make a cola choice, but haven't inserted any credits. Are you trying to cheat, Comrade?\n<br />";
  }

  public function dispense()
  {
    echo "No Comrade Cola yet. You haven't inserted any credits.\n<br />";
  }

  public function __toString()
  {
    return "State: NoCreditState.";
  }

}
>>>>>>> 5a4c2d936dccedf27472d6a1567cf214c4195f5b
