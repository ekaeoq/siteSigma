/*sigma naslov redirect
-koristi se loading gif(slow.gif)--loadingPage folder
-svaki redirect sluzi za redirect do loading page-a(pa dalje ide)
*/

/*loadingPage folder where the gif file is located*/
function Redirect(){
    location.href="../loadingPage/indexLoading.html";
}

/*Hanin char click-redirect do njezinog loading page-a*/
function hanaPage (){
	location.href="../loadingPageHana/indexLoadingHana.html";
}

/*ekaeo char click-redirect do njegovo loading page-a*/
function ekaeoPage() {
	location.href="../loadingPageEkaeo/indexLoadingEkaeo.html";
}
/*Redirect do ListLoadingFolder-a gdje su smjesteni redirecti do
novih html stranica s temom navedenom na <a> tagu u listi*/
function RedirectLi_1() {
	loacation.href="../ListLoadingFolder/indexLoadingLi_1.html";
}