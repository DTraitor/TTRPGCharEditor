namespace CharacterSheet.Models;

public class SpellPage
{
    public string ClassName { get; set; }
    public string CastAttribute { get; set; }
    public string SaveAttribute { get; set; }
    public string AttackBonus { get; set; }
    public List<int> SlotsMax { get; set; }
    public List<int> SlotsUsed { get; set; }
    public List<Spell> Spells { get; set; }
}