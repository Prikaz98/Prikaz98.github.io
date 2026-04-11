import grpc.{Drink, Food, Order}

def extractCustomer(order: Order): String = {
  import grpc.Order.Data

  order match {
    case Data.Drink(drink) => extractFromDrink(drink)
    case Data.Food(food) => extractFromFood(food)
  }
}

private def extractFromDrink(drink: Drink): String = {
  import grpc.Drink.Data

  drink match {
    case Data.Tee(tee) => tee.drinker
    case Data.Coffee(coffee) => coffee.drinker
  }
}

private def extractFromFood(food: Food): String = {
  import grpc.Food.Data

  food match {
    case Data.Fish(fish) => fish.eater
    case Data.Vegitables(veg) => vef.eater
  }
}
