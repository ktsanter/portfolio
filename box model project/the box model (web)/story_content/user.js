function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6VxT2rMRy1g":
        Script1();
        break;
      case "5kWywCwd1r3":
        Script2();
        break;
      case "64qXL0ChqWf":
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

