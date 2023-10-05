using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pizza_app.Models
{
    public class Order
    {
        [Key]
        public long OrderId { get; set; }
        [Column(TypeName = "nvarchar(75)")]
        public string OrderNumber { get; set; }
        public decimal GTotal { get; set; }
        public List<OrderDetail> OrderDetails { get; set; }
    }
}
