<<<<<<< HEAD
<?php

class PromotionalState implements StateInterface
{
  private $ccMachine;

  function __construct($ccMachine)
  {
    $this->ccMachine = $ccMachine;
  }

  public function insertCredit()
  {
     echo "One credit at a time please Comrade. Your cold, refreshing Comrade Cola is being dispensed.\n<br />";
  }

  public function returnCredit()
  {
    echo "Sorry Comrade, no refund. You just bought a cold, refreshing Comrade Cola with your credit!\n<br />";
  }

  public function customerChoice()
  {
    echo "Sorry Comrade. You only get one cold, refreshing Comrade Cola per credit!\n<br />";
  }

  public function dispense()
  {
    $message = "YOU'VE WON A FREE COMRADE COLA!!!<br />";
    $this->ccMachine->releaseProduct($message);
    if($this->ccMachine->inventory == 0)
    {
      echo "Looks like we're out of Comrade Cola. Maybe refunding a credit or something would work out.<br />";
      $this->ccMachine->state = $this->ccMachine->emptyState;
      $this->ccMachine->state->returnCredit();
    }
    else
    {
      $this->ccMachine->releaseProduct();
      if($this->ccMachine->inventory > 0)
      {
        $this->ccMachine->state = $this->ccMachine->noCreditState;
      }
      else
      {
        $this->ccMachine->state = $this->ccMachine->emptyState;
      }
    }

  }

  public function __toString()
  {
    return "State: PromotionalState.";
  }

}
=======
<?php

class PromotionalState implements StateInterface
{
  private $ccMachine;

  function __construct($ccMachine)
  {
    $this->ccMachine = $ccMachine;
  }

  public function insertCredit()
  {
     echo "One credit at a time please Comrade. Your cold, refreshing Comrade Cola is being dispensed.\n<br />";
  }

  public function returnCredit()
  {
    echo "Sorry Comrade, no refund. You just bought a cold, refreshing Comrade Cola with your credit!\n<br />";
  }

  public function customerChoice()
  {
    echo "Sorry Comrade. You only get one cold, refreshing Comrade Cola per credit!\n<br />";
  }

  public function dispense()
  {
    $message = "YOU'VE WON A FREE COMRADE COLA!!!<br />";
    $this->ccMachine->releaseProduct($message);
    if($this->ccMachine->inventory == 0)
    {
      echo "Looks like we're out of Comrade Cola. Maybe refunding a credit or something would work out.<br />";
      $this->ccMachine->state = $this->ccMachine->emptyState;
      $this->ccMachine->state->returnCredit();
    }
    else
    {
      $this->ccMachine->releaseProduct();
      if($this->ccMachine->inventory > 0)
      {
        $this->ccMachine->state = $this->ccMachine->noCreditState;
      }
      else
      {
        $this->ccMachine->state = $this->ccMachine->emptyState;
      }
    }

  }

  public function __toString()
  {
    return "State: PromotionalState.";
  }

}
>>>>>>> 5a4c2d936dccedf27472d6a1567cf214c4195f5b
