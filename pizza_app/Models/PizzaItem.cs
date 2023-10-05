using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pizza_app.Models
{
    public class PizzaItem
    {
        [Key]
        public int PizzaItemId { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public int PizzaName { get; set; }
        public decimal PizzaPrice { get; set; }

    }
}
