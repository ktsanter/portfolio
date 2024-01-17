function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5XR3JDtloOF":
        Script1();
        break;
      case "5yqhSpHgqar":
        Script2();
        break;
      case "650PbkpSshE":
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

