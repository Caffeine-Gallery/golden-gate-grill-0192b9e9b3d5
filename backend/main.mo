import Text "mo:base/Text";
import Array "mo:base/Array";
import Nat "mo:base/Nat";
import Time "mo:base/Time";
import Result "mo:base/Result";
import Debug "mo:base/Debug";

actor {
  type Reservation = {
    name: Text;
    date: Text;
    time: Text;
    guests: Nat;
  };

  stable var reservations : [Reservation] = [];

  public func makeReservation(name: Text, date: Text, time: Text, guests: Nat) : async Result.Result<Text, Text> {
    let newReservation : Reservation = {
      name = name;
      date = date;
      time = time;
      guests = guests;
    };

    reservations := Array.append(reservations, [newReservation]);
    #ok("Reservation successfully made")
  };

  public query func getReservations() : async [Reservation] {
    reservations
  };
}
