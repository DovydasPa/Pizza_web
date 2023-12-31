using Microsoft.EntityFrameworkCore;
using pizza_app.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<OrderDbContext>(
    options => options.UseSqlServer("Server=.;Database=OrderPizza;Integrated Security=True;TrustServerCertificate=True;"));

//builder.Configuration.GetConnectionString("DefaultConnection")


builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
}

app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
