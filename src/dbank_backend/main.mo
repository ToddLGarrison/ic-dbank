import Debug "mo:base/Debug";
import Nat "mo:base/Nat";

actor DBank {
  var currentValue = 300;
  currentValue := 100;

  let id = 1314614636315;

  // Debug.print(debug_show(id))

  public func topUp(amount: Nat) {
    currentValue += amount;
    Debug.print(debug_show(currentValue))
  };

  public func withdrawl(amount: Nat) {
    let tempValue: Int = currentValue - amount;
    if (tempValue >= 0){
      currentValue -= amount;
      Debug.print(debug_show(currentValue))
    } else {
      Debug.print("Withdrawl amount greater that current value")
    }
  };

  public query func checkBalance(): async Nat {
    return currentValue
  };

  //topUp();
}