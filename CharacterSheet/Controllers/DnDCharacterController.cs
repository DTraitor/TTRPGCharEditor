using CharacterSheet.Models;
using Microsoft.AspNetCore.Mvc;

namespace CharacterSheet.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class DnDCharacterController : Controller
{
    // GET
    public IActionResult Index()
    {
        return View();
    }

    [HttpGet("{id}")]
    public IActionResult TopSide(int? id)
    {
        return Json(new
        {
            name = "Joe",
            player = "Mama",
            classes = new List<DnDClass>()
            {
                new DnDClass()
                {
                    Name = "Barbarian",
                    Description = "A fierce warrior of primitive background who can enter a battle rage",
                    Level = 1
                }
            },
            background = new Background()
            {
                Name = "Acolyte",
                Description = "You have spent your life in the service of a temple to a specific god or pantheon of gods."
            },
            race = new Race()
            {
                Name = "Human",
                Description = "Humans are the most adaptable and ambitious people"
            },
            alignment = 0,
            experience = 0,
            inspirations = 0,
            proficiency = 0
        });
    }

    [HttpGet("{id}")]
    public IActionResult Attributes(int? id)
    {
        return Json(new
        {
            strength = 10,
            dexterity = 10,
            constitution = 10,
            intelligence = 10,
            wisdom = 10,
            charisma = 10
        });
    }

    [HttpGet("{id}")]
    public IActionResult Feats(int? id)
    {
        return Json(new
        {
            other_prof_language = "Common, Elvish",
            features_traits = "Alert",
            equipment = "Some stuff"
        });
    }

    [HttpGet("{id}")]
    public IActionResult Health(int? id)
    {
        return Json(new
        {
            armour = 20,
            initiative = 4,
            speed = 18,
            maxhp = 20,
            curhp = 20,
            temphp = 4,
            deathsave_suc = 2,
            deathsave_fail = 1,
            total_hitdice = "2d4",
            hitdice = "2d4"
        });
    }

    [HttpGet("{id}")]
    public IActionResult Looks(int? id)
    {
        return Json(new
        {
            age = "40",
            height = "200m",
            weight = "200kg",
            eyes = "blue",
            skin = "dark",
            hair = "black",
            allies = "Guild of Thieves",
            backstory = "Some bs about a thief",
            treasure = "None",
            additional = "None"
        });
    }

    [HttpGet("{id}")]
    public IActionResult Money(int? id)
    {
        return Json(new
        {
            platinum = 0,
            gold = 1,
            electrum = 0,
            silver = 3,
            copper = 24
        });
    }

    [HttpGet("{id}")]
    public IActionResult Personality(int? id)
    {
        return Json(new
        {
            traits = "I always have a plan for what to do when things go wrong",
            ideals = "I steal from the rich and give to the poor",
            bonds = "I'm loyal to my guild",
            flaws = "I can't resist a pretty face"
        });
    }

    [HttpGet("{id}")]
    public IActionResult SavingThrows(int? id)
    {
        return Json(new
        {
            strength = 0,
            dexterity = 0,
            constitution = 0,
            intelligence = 0,
            wisdom = 0,
            charisma = 0
        });
    }

    [HttpGet("{id}")]
    public IActionResult Skills(int? id)
    {
        return Json(new
        {
            acrobatics = 1,
            animal_handle = 1,
            arcana = 1,
            athletics = 1,
            deception = 1,
            history = 1,
            insight = 1,
            intimidation = 1,
            investigating = 1,
            medicine = 1,
            nature = 1,
            perception = 1,
            performance = 1,
            persuasion = 1,
            religion = 1,
            sleight_of_hand = 1,
            stealth = 1,
            survival = 1,
            passive_wisdom = 1
        });
    }

    [HttpGet("{id}/{page}")]
    public IActionResult Spells(int? id, int? page)
    {
        return Json(new List<SpellPage>
        {
            new SpellPage()
            {
                ClassName = "Wizard",
                CastAttribute = "Intelligence",
                SaveAttribute = "Intelligence",
                AttackBonus = "Intelligence",
                SlotsMax = new List<int> {3, 0, 0, 0, 0, 0, 0, 0, 0},
                SlotsUsed = new List<int> {0, 0, 0, 0, 0, 0, 0, 0, 0},
                Spells = new List<Spell>
                {
                    new Spell()
                    {
                        Name = "Fireball",
                        Level = 3
                    }
                }
            }
        });
    }

    [HttpGet("{id}")]
    public IActionResult Weapons(int? id)
    {
        return Json(new List<Weapon>
        {
            new Weapon()
            {
                Name = "Dagger",
                AttackBonus = 2,
                Damage = "1d4",
                DamageType = "Piercing"
            }
        });
    }
}