namespace pizza_app.Models
{
    public class ItemModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public decimal Price { get; set; }
        public int ImageId { get; set; }
        public int Ranking { get; set; }
        public int ItemType { get; set; }

    }
}