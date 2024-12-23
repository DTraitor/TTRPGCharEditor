using Microsoft.AspNetCore.Mvc;

namespace CharacterSheet.Controllers;

public class CharacterController : Controller
{
    // GET
    public IActionResult Index()
    {
        return View();
    }
}