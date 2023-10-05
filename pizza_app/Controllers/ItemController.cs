using Microsoft.AspNetCore.Mvc;
using pizza_app.Models;

namespace RankingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemController : ControllerBase
    {
        private static readonly IEnumerable<ItemModel> Items = new[]
        {
            new ItemModel{Id =1, Title = "Small pizza",ImageId=1, Ranking=0,ItemType=1 },
            new ItemModel{Id =2, Title = "Medium pizza", ImageId=2, Ranking=0,ItemType=1 },
            new ItemModel{Id =3, Title = "Large pizza", ImageId=3, Ranking=0,ItemType=1 },

        };

        [HttpGet("{itemType:int}")]
        public ItemModel[] Get(int itemType)
        {
            ItemModel[] items = Items.Where(i => i.ItemType == itemType).ToArray();
            System.Threading.Thread.Sleep(2000);
            return items;
        }
    }
}