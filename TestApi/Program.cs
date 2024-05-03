using Microsoft.AspNetCore.Mvc;
using TestApi;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors();

var app = builder.Build();

string[] foodList = { "Apple", "Watermelon", "Pear", "Pineapple", "Gurke", "Tomato", "Mango" };

List<User> users = new List<User>()
{
    new User() {FirstName="A", LastName="User", Id= 1, Role= "admin"},
    new User() {FirstName="B", LastName="User", Id= 2, Role= "pleb"}
};


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/rollDice", () =>
{
    var rand = new Random();
    var nr = rand.Next() % 6 + 1;
    return nr;
}).WithName("GetDiceRoll");


app.MapGet("/food", () =>
{
    return Results.Ok(foodList.Select((name, index) => new { id = index, name = name }));
}).WithName("GetFoodList");

app.MapGet("/food/{id}", (int id) =>
{
    if (id < foodList.Length)
    {
        return Results.Ok(foodList[id]);
    }
    return Results.NotFound($"Fruit with id: {id} not found");
}).WithName("GetFood");

app.MapGet("/users", () =>
{
    return Results.Ok(users);
}).WithName("GetUserList");

app.MapGet("/user/{id}", (int id) =>
{
    if (users.FirstOrDefault(x => x.Id == id) != default)
    {
        return Results.Ok(users.FirstOrDefault(x => x.Id == id));
    }
    return Results.NotFound($"User with id: {id} not found");
}).WithName("GetUserById");


app.UseCors(x => x
                   .AllowAnyMethod()
                   .AllowAnyHeader()
                   .SetIsOriginAllowed(origin => true) // allow any origin
                                                       //.WithOrigins("https://localhost:44351")); // Allow only this origin can also have multiple origins separated with comma
                   .AllowCredentials()); // allow credentials
app.Run();
