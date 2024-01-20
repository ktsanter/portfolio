function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6VsrC0uta2c":
        Script1();
        break;
      case "67lDcbVqOHb":
        Script2();
        break;
      case "5k3v4RRNrvQ":
        Script3();
        break;
      case "5xW0qMRGy5M":
        Script4();
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

const boxWidth = player.GetVar("contentWidth") + 2 * padding + 2 * border + 2 * margin;
const boxHeight = player.GetVar("contentHeight") + 2 * padding + 2 * border + 2 * margin;
player.SetVar("totalWidth", boxWidth);
player.SetVar("totalHeight", boxHeight);

}

function Script2()
{
  const player = GetPlayer();
const padding = player.GetVar("sliderPadding");
const border = player.GetVar("sliderBorder");
const margin = player.GetVar("sliderMargin");

const stateName = "state-" + padding + "-" + border + "-" + margin;
player.SetVar("boxStateName", stateName);

const boxWidth = player.GetVar("contentWidth") + 2 * padding + 2 * border + 2 * margin;
const boxHeight = player.GetVar("contentHeight") + 2 * padding + 2 * border + 2 * margin;
player.SetVar("totalWidth", boxWidth);
player.SetVar("totalHeight", boxHeight);

}

function Script3()
{
  const player = GetPlayer();
const padding = player.GetVar("sliderPadding");
const border = player.GetVar("sliderBorder");
const margin = player.GetVar("sliderMargin");

const stateName = "state-" + padding + "-" + border + "-" + margin;
player.SetVar("boxStateName", stateName);

const boxWidth = player.GetVar("contentWidth") + 2 * padding + 2 * border + 2 * margin;
const boxHeight = player.GetVar("contentHeight") + 2 * padding + 2 * border + 2 * margin;
player.SetVar("totalWidth", boxWidth);
player.SetVar("totalHeight", boxHeight);

}

function Script4()
{
  const player = GetPlayer();
const padding = player.GetVar("sliderPadding");
const border = player.GetVar("sliderBorder");
const margin = player.GetVar("sliderMargin");

const stateName = "state-" + padding + "-" + border + "-" + margin;
player.SetVar("boxStateName", stateName);

const boxWidth = player.GetVar("contentWidth") + 2 * padding + 2 * border + 2 * margin;
const boxHeight = player.GetVar("contentHeight") + 2 * padding + 2 * border + 2 * margin;
player.SetVar("totalWidth", boxWidth);
player.SetVar("totalHeight", boxHeight);

}

