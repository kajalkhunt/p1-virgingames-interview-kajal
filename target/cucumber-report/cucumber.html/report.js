$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LiveCasio.feature");
formatter.feature({
  "line": 2,
  "name": "Live Casino",
  "description": "As a user I want to click on Live Casino tab",
  "id": "live-casino",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7568182400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "As a user I want to click on live casino tab",
  "description": "",
  "id": "live-casino;as-a-user-i-want-to-click-on-live-casino-tab",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Virgin games homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I am clicking on live casino tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on live casino page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I verify the text \"Live Blackjack Games\"",
  "keyword": "And "
});
formatter.match({
  "location": "LiveCasinoSteps.iAmOnVirginGamesHomepage()"
});
formatter.result({
  "duration": 193311500,
  "status": "passed"
});
formatter.match({
  "location": "LiveCasinoSteps.iAmClickingOnLiveCasinoTab()"
});
formatter.result({
  "duration": 174513500,
  "status": "passed"
});
formatter.match({
  "location": "LiveCasinoSteps.iAmOnLiveCasinoPage()"
});
formatter.result({
  "duration": 119229400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Live Blackjack Games",
      "offset": 19
    }
  ],
  "location": "LiveCasinoSteps.iVerifyTheText(String)"
});
formatter.result({
  "duration": 565277600,
  "status": "passed"
});
formatter.after({
  "duration": 772459400,
  "status": "passed"
});
});