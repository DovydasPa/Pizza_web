using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pizza_app.Models
{
    public class ToppingItem
    {
        [Key]
        public int ToppingItemId { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public int ToppingItemName { get; set; }
        public decimal ToppingItemPrice { get; set;}
    }
}
