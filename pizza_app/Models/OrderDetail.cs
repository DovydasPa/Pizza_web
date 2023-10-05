using System.ComponentModel.DataAnnotations;

namespace pizza_app.Models
{
    public class OrderDetail
    {
        [Key]
        public long OrderDetailId { get; set; }

        public long OrderId { get; set; }
        public Order Order { get; set; }

        public int FoodItemId { get; set; }
        public ToppingItem FoodItem { get; set; }
        public int PizzaItemId { get; set; }
        public PizzaItem PizzaItem { get; set; }

        public decimal FoodItemPrice { get; set; }

    }
}
