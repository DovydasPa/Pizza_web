using Microsoft.EntityFrameworkCore;

namespace pizza_app.Models
{
    public class OrderDbContext:DbContext
    {
        public OrderDbContext(DbContextOptions<OrderDbContext>options)
            :base(options)
        {
            
        }
        public DbSet<PizzaItem> PizzaItems { get; set; }
        public DbSet<ToppingItem> ToppingItems { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
    }
}
