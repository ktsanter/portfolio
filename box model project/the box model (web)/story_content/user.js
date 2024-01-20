function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6gsmXPoHWXb":
        Script1();
        break;
      case "6OpotVs7DAB":
        Script2();
        break;
      case "6nODroLpQRt":
        Script3();
        break;
  }
}

function Script1()
{
  const player = GetPlayer();
const padding = player.GetVar("sliderPadding");
const border = player.GetVar("sliderBorder");
const margin = player.GetVar("sliderMargin");

const stateName = "state-" + padding + "-" + border + "-" + margin;
player.SetVar("boxStateName", stateName);

}

function Script2()
{
  const player = GetPlayer();
const padding = player.GetVar("sliderPadding");
const border = player.GetVar("sliderBorder");
const margin = player.GetVar("sliderMargin");

const stateName = "state-" + padding + "-" + border + "-" + margin;
player.SetVar("boxStateName", stateName);

}

function Script3()
{
  const player = GetPlayer();
const padding = player.GetVar("sliderPadding");
const border = player.GetVar("sliderBorder");
const margin = player.GetVar("sliderMargin");

const stateName = "state-" + padding + "-" + border + "-" + margin;
player.SetVar("boxStateName", stateName);

}

