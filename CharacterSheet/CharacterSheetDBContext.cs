using CharacterSheet.Models;
using Microsoft.EntityFrameworkCore;

namespace CharacterSheet;

public class CharacterSheetDBContext : DbContext
{
    public DbSet<Character> Characters { get; set; }

    public CharacterSheetDBContext(DbContextOptions<CharacterSheetDBContext> options) : base(options)
    {
    }

}