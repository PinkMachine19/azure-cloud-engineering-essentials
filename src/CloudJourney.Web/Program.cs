using System.Collections.Concurrent;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddHealthChecks();
builder.Services.AddSingleton<DocumentStore>();
var app = builder.Build();
app.UseDefaultFiles(); app.UseStaticFiles();
app.MapHealthChecks("/health");
app.MapGet("/api/documents", (DocumentStore store) => Results.Ok(store.All));
app.MapPost("/api/documents", (CreateDocument input, DocumentStore store, ILogger<Program> log) => {
    if (string.IsNullOrWhiteSpace(input.Name)) return Results.ValidationProblem(new Dictionary<string,string[]> {{"name",["Name is required."]}});
    var item = store.Add(input.Name.Trim());
    log.LogInformation("Document {DocumentId} accepted with status {Status}", item.Id, item.Status);
    return Results.Created($"/api/documents/{item.Id}", item);
});
app.Run();
public record CreateDocument(string Name);
public record DocumentItem(Guid Id,string Name,string Status,DateTimeOffset CreatedAt);
public sealed class DocumentStore { readonly ConcurrentQueue<DocumentItem> items=[]; public IEnumerable<DocumentItem> All=>items.Reverse(); public DocumentItem Add(string name){var item=new DocumentItem(Guid.NewGuid(),name,"Queued",DateTimeOffset.UtcNow);items.Enqueue(item);return item;} }
public partial class Program { }
