<?php

class ComradeColaMachine
{
    const _EMPTY      = 1;
    const _NO_CREDIT  = 2;
    const _HAS_CREDIT = 3;
    const _SOLD       = 4;
    private $state     = self::_EMPTY;

    private $inventory = 0;

    function __construct($inventory)
    {
        $this->inventory = $inventory;
        if($inventory > 0)
        {
            $this->state = self::_NO_CREDIT;
        }
    }

    function insertCredit()
    {
        switch($this->state)
        {
            case self::_HAS_CREDIT:
                echo "You can't insert any more credits at this time.\n<br>";
                break;
            case self::_NO_CREDIT:
                $this->state = self::_HAS_CREDIT;
                echo "Your credit has been accepted.\n<br>";
                break;
            case self::_EMPTY:
                echo "You can't insert credits because this machine is out of Comrade Cola.\n<br>";
                break;
            case self::_SOLD:
                echo "Please wait. Your cold, refreshing Comrade Cola is being dispensed.\n<br>";
                break;
            default:
                echo "Whoa there comrade! We need to raise some sort of error.\n<br>";
        }
    }

    function returnCredit()
    {
        switch($this->state)
        {
            case self::_HAS_CREDIT:
                echo "Your credit is being returned.\n<br>";
                $this->state = self::_NO_CREDIT;
                break;
            case self::_NO_CREDIT:
                echo "You haven't inserted any credits.\n<br>";
                break;
            case self::_EMPTY:
                echo "There are no credits to return because sold out machines don't accept credits.\n<br>";
                break;
            case self::_SOLD:
                echo "Sorry Comrade. You already bought a cold, refreshing Comrade Cola!\n<br>";
                break;
            default:
                echo "Whoa there comrade! We need to raise some sort of error.\n<br>";
        }
    }

    function customerChoice()
    {
        switch($this->state)
        {
            case self::_HAS_CREDIT:
                echo "You've made your choice...\n<br>";
                $this->state = self::_SOLD;
                $this->dispense();
                break;
            case self::_NO_CREDIT:
                echo "You've made a choice, but haven't inserted any credits.\n<br>";
                break;
            case self::_EMPTY:
                echo "You've made a choice, but we are sold out of Comrade Cola.\n<br>";
                break;
            case self::_SOLD:
                echo "Sorry Comrade. You only get one cold, refreshing Comrade Cola per credit!\n<br>";
                break;
            default:
                echo "Whoa there comrade! We need to raise some sort of error.\n<br>";
        }
    }

    function dispense()
    {
        switch($this->state)
        {
            case self::_HAS_CREDIT:
                echo "No Comrade Cola yet. You must make a choice first.\n<br>";
                break;
            case self::_NO_CREDIT:
                echo "No Comrade Cola yet. You haven't inserted any credits.\n<br>";
                break;
            case self::_EMPTY:
                echo "No Comrade Cola yet. Sold out machines can't dispense colas.\n<br>";
                break;
            case self::_SOLD:
                echo "Congrats Comrade! Enjoy your cold, refreshing Comrade Cola!\n<br>";
                $this->inventory -= 1;
                if($this->inventory == 0)
                {
                    echo "The machine is out of Comrade Cola!\n<br>";
                    $this->state = self::_EMPTY;
                }
                else
                {
                    $this->state = self::_NO_CREDIT;
                }
                break;
            default:
                echo "Whoa there comrade! We need to raise some sort of error.\n";
        }
    }

    function __toString()
    {
        $string = sprintf("Comrade Cola PHP Vending Machine.\n<br>Inventory: %d\n<br>", $this->inventory);
        if($this->inventory > 0 && $this->state != self::_HAS_CREDIT)
        {
            $string .= "Machine is waiting for credits.\n<br>";
        }
        return $string . "\n<br />";
    }

        # We may want to refill the machine at some point.
    function refill()
    {
        //todo
    }
}

# Let's test our machine.
$ccMachine = new ComradeColaMachine(5);
echo $ccMachine;

$ccMachine->insertCredit();
echo $ccMachine;

$ccMachine->customerChoice();
echo $ccMachine;

$ccMachine->insertCredit();
echo $ccMachine;

$ccMachine->returnCredit();
echo $ccMachine;

$ccMachine->customerChoice();
echo $ccMachine;
