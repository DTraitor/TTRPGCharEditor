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
            experience = 0
        });
    }

    [HttpGet("{id}")]
    public IActionResult Attributes(int? id)
    {
        return Json(new
        {
            strength = 10,
            strength_bonus = 0,
            dexterity = 14,
            dexterity_bonus = 2,
            constitution = 18,
            constitution_bonus = +4,
            intelligence = 7,
            intelligence_bonus = -2,
            wisdom = 10,
            wisdom_bonus = 0,
            charisma = 13,
            charisma_bonus = 1
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
            charisma = 0,
            inspirations = 0,
            proficiency = 0
        });
    }

    [HttpGet("{id}")]
    public IActionResult Skills(int? id)
    {
        return Json(new List<Skill>
        {
            new()
            {
                SkillName = "Acrobatics",
                Value = 1,
                Proficiency = true
            },
            new()
            {
                SkillName = "Animal Handling",
                Value = 1,
                Proficiency = true
            },
            new()
            {
                SkillName = "Arcana",
                Value = 1,
                Proficiency = true
            },
            new()
            {
                SkillName = "Athletics",
                Value = 1,
                Proficiency = true
            },
            new()
            {
                SkillName = "Deception",
                Value = 1,
                Proficiency = true
            },
            new()
            {
                SkillName = "History",
                Value = 1,
                Proficiency = true
            },
            new()
            {
                SkillName = "Insight",
                Value = 1,
                Proficiency = true
            },
            new()
            {
                SkillName = "Intimidation",
                Value = 1,
                Proficiency = true
            },
            new()
            {
                SkillName = "Investigation",
                Value = 1,
                Proficiency = true
            },
            new()
            {
                SkillName = "Medicine",
                Value = 1,
                Proficiency = true
            },
            new()
            {
                SkillName = "Nature",
                Value = 1,
                Proficiency = true
            },
            new()
            {
                SkillName = "Perception",
                Value = 1,
                Proficiency = true
            },
            new()
            {
                SkillName = "Performance",
                Value = 1,
                Proficiency = true
            },
            new()
            {
                SkillName = "Persuasion",
                Value = 1,
                Proficiency = true
            },
            new()
            {
                SkillName = "Religion",
                Value = 1,
                Proficiency = true
            },
            new()
            {
                SkillName = "Sleight of Hand",
                Value = 1,
                Proficiency = true
            },
            new()
            {
                SkillName = "Stealth",
                Value = 1,
                Proficiency = true
            },
            new()
            {
                SkillName = "Survival",
                Value = 1,
                Proficiency = true
            }

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