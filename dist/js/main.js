'use strict';var doc=document.documentElement;var body=document.body;var spinner=document.getElementById('spinner');var header=document.getElementById('header');var menu=document.getElementById('menu');var title=document.getElementById('title');var nav=document.getElementById('nav');var closeMenu=document.getElementById('closeMenu');var paths=['index','people','planets','films','species','vehicles','starships'];var images={people:['./dist/img/people/luke.jpg','./dist/img/people/c3po.jpg','./dist/img/people/r2d2.ico','./dist/img/people/darth.jpeg','./dist/img/people/leia.jpg','./dist/img/people/owen.jpg','./dist/img/people/beru.jpg','./dist/img/people/r5d5.jpg','./dist/img/people/biggs.jpg','./dist/img/people/obi.jpg'],films:['./dist/img/films/4.jpg','./dist/img/films/2.jpg','./dist/img/films/1.jpg','./dist/img/films/3.jpg','./dist/img/films/6.jpg','./dist/img/films/5.jpg','./dist/img/films/7.jpg'],planets:['./dist/img/planets/alderaan.jpg','./dist/img/planets/yavin.jpg','./dist/img/planets/hoth.jpg','./dist/img/planets/dagobah.jpg','./dist/img/planets/bespin.jpg','./dist/img/planets/endor.jpg','./dist/img/planets/naboo.jpg','./dist/img/planets/coruscant.jpg','./dist/img/planets/kamino.jpg','./dist/img/planets/geonosis.jpg'],species:['./dist/img/species/hutt.jpg','./dist/img/species/yoda.jpg','./dist/img/species/trandoshan.jpg','./dist/img/species/mon.jpg','./dist/img/species/ewok.jpg','./dist/img/species/sullustan.jpg','./dist/img/species/neimodian.jpg','./dist/img/species/gungan.jpg','./dist/img/species/toydarian.jpg','./dist/img/species/dug.jpg'],starships:['./dist/img/starships/executor.jpg','./dist/img/starships/sentinel.jpg','./dist/img/starships/death.jpg','./dist/img/starships/millennium.jpg','./dist/img/starships/y-wing.jpg','./dist/img/starships/x-wing.jpg','./dist/img/starships/tie-advance.jpg','./dist/img/starships/slave.ico','./dist/img/starships/imperial.jpg','./dist/img/starships/ef76.jpg'],vehicles:['./dist/img/vehicles/sand.jpg','./dist/img/vehicles/t-16.jpg','./dist/img/vehicles/x-34.jpg','./dist/img/vehicles/tie-ln.jpg','./dist/img/vehicles/snowspeeder.jpg','./dist/img/vehicles/tie-bomber.png','./dist/img/vehicles/at-at.jpg','./dist/img/vehicles/at-st.jpg','./dist/img/vehicles/storm.jpg','./dist/img/vehicles/sail.jpg']};var buttons=[];var containers=[];var selects=[];var a=void 0;var b=void 0;paths.forEach(function(path){buttons.push(document.getElementById(path));containers.push(document.getElementById('container-'+path));selects.push(document.getElementById('select-'+path))});// En github pages
if(window.location.origin==='https://juananto11.github.io/api-starwars'&&!paths.includes(window.location.search.replace('?',''))){window.location.href='https://juananto11.github.io/api-starwars/?index'}// En desarrollo
// if (window.location.origin === 'http://localhost:3000' && !paths.includes(window.location.search.replace('?', ''))) {
//   window.location.href = 'http://localhost:3000/?index'
// }
var showPage=function showPage(page){nav.classList.remove('nav-expand');menu.classList.remove('arrow');spinner.classList.remove('spinner--hidden');header.style.top='0';setTimeout(function(){window.location.search='?'+page},500)};var toggleMenu=function toggleMenu(){menu.classList.toggle('arrow');nav.classList.toggle('nav-expand')};var drawResponse=function drawResponse(response,container){var div=document.createElement('div');div.classList.add('cards-container');response.forEach(function(res,index){switch(window.location.search){case'?people':div.insertAdjacentHTML('beforeend','\n          <div class="card" id="'+res.name.split(' ')[0].toLowerCase()+'">\n            <h4 class="card__title">'+res.name.toLowerCase()+'</h4>\n            <img src="'+images[container][index]+'" alt="" class="card__image">\n            <p class="card__text">Genero: <span class="card__text--black">'+res.gender.toLowerCase()+'</span></p>\n            <p class="card__text">Nacimiento: <span class="card__text--black">'+res.birth_year.toLowerCase()+'</span></p>\n            <p class="card__text">Estatura: <span class="card__text--black">'+res.height.toLowerCase()+'</span></p>\n            <p class="card__text">Peso: <span class="card__text--black">'+res.mass.toLowerCase()+'</span></p>\n          </div>\n        ');break;case'?planets':div.insertAdjacentHTML('beforeend','\n          <div class="card" id="'+res.name.split(' ')[0].toLowerCase()+'">\n            <h4 class="card__title">'+res.name.toLowerCase()+'</h4>\n            <img src="'+images[container][index]+'" alt="" class="card__image">\n            <p class="card__text">Diametro: <span class="card__text--black">'+res.diameter.toLowerCase()+'</span></p>\n            <p class="card__text">Clima: <span class="card__text--black">'+res.climate.toLowerCase()+'</span></p>\n            <p class="card__text">Gravedad: <span class="card__text--black">'+res.gravity.toLowerCase()+'</span></p>\n            <p class="card__text">Poblaci\xF3n: <span class="card__text--black">'+res.population.toLowerCase()+'</span></p>\n          </div>\n        ');break;case'?films':div.insertAdjacentHTML('beforeend','\n          <div class="card" id="episodio_'+res.episode_id+'">\n            <h4 class="card__title">'+res.title.toLowerCase()+'</h4>\n            <img src="'+images[container][index]+'" alt="" class="card__image">\n            <p class="card__text">Episodio: <span class="card__text--black">'+res.episode_id+'</span></p>\n            <p class="card__text">Director: <span class="card__text--black">'+res.director.toLowerCase()+'</span></p>\n            <p class="card__text">Productor: <span class="card__text--black">'+res.producer.toLowerCase()+'</span></p>\n            <p class="card__text">Lanzamiento: <span class="card__text--black">'+res.release_date.toLowerCase()+'</span></p>\n          </div>\n        ');break;case'?species':div.insertAdjacentHTML('beforeend','\n          <div class="card" id="'+res.name.split(' ')[0].toLowerCase()+'">\n            <h4 class="card__title">'+res.name.toLowerCase()+'</h4>\n            <img src="'+images[container][index]+'" alt="" class="card__image">\n            <p class="card__text">Clasificaci\xF3n: <span class="card__text--black">'+res.classification.toLowerCase()+'</span></p>\n            <p class="card__text">Designaci\xF3n: <span class="card__text--black">'+res.designation.toLowerCase()+'</span></p>\n            <p class="card__text">Lenguaje: <span class="card__text--black">'+res.language.toLowerCase()+'</span></p>\n            <p class="card__text">Planeta: <span class="card__text--black">'+res.homeworld.toLowerCase()+'</span></p>\n          </div>\n        ');break;case'?vehicles':div.insertAdjacentHTML('beforeend','\n          <div class="card" id="'+res.name.split(' ')[0].toLowerCase()+'">\n            <h4 class="card__title">'+res.name.toLowerCase()+'</h4>\n            <img src="'+images[container][index]+'" alt="" class="card__image">\n            <p class="card__text">Modelo: <span class="card__text--black">'+res.model.toLowerCase()+'</span></p>\n            <p class="card__text">Fabricante: <span class="card__text--black">'+res.manufacturer.toLowerCase()+'</span></p>\n            <p class="card__text">Capacidad: <span class="card__text--black">'+res.cargo_capacity.toLowerCase()+'</span></p>\n            <p class="card__text">Pasajeros: <span class="card__text--black">'+res.passengers.toLowerCase()+'</span></p>\n          </div>\n        ');break;case'?starships':div.insertAdjacentHTML('beforeend','\n          <div class="card" id="'+res.name.split(' ')[0].toLowerCase()+'">\n            <h4 class="card__title">'+res.name.toLowerCase()+'</h4>\n            <img src="'+images[container][index]+'" alt="" class="card__image">\n            <p class="card__text">Modelo: <span class="card__text--black">'+res.model.toLowerCase()+'</span></p>\n            <p class="card__text">Tipo: <span class="card__text--black">'+res.starship_class.toLowerCase()+'</span></p>\n            <p class="card__text">Fabricante: <span class="card__text--black">'+res.manufacturer.toLowerCase()+'</span></p>\n            <p class="card__text">Pasajeros: <span class="card__text--black">'+res.passengers.toLowerCase()+'</span></p>\n          </div>\n        ');break;}});document.getElementById('container-cards-'+container).appendChild(div);var spinner=document.getElementById('spinner');setTimeout(function(){spinner.classList.add('spinner--hidden')},500)};var request=function request(endPoint){fetch('https://swapi.co/api/'+endPoint).then(function(res){switch(res.status){case 200:return res.json();default:console.log('error');break;}}).then(function(json){return drawResponse(json.results,endPoint)}).catch(function(error){return console.log(error)})};var showData=function showData(endPoint){containers.forEach(function(container,index){if(container.id.includes(window.location.search.replace('?','')))container.classList.remove('invisible');if(buttons[index].id===window.location.search.replace('?',''))buttons[index].classList.add('nav__item--black')});if(window.location.search!=='?index'){request(endPoint)}else{var _spinner=document.getElementById('spinner');setTimeout(function(){_spinner.classList.add('spinner--hidden')},500)}};var selectCharacter=function selectCharacter(e){var cards=document.querySelectorAll('.card');cards.forEach(function(card){card.classList.remove('invisible');if(e.target.value==='all')card.classList.remove('invisible');else if(e.target.value!==card.id)card.classList.add('invisible')})};title.addEventListener('click',function(){window.location.search='index'});menu.addEventListener('click',toggleMenu);closeMenu.addEventListener('click',toggleMenu);buttons.forEach(function(button,index){button.addEventListener('click',function(){return showPage(paths[index])})});selects.forEach(function(select){if(select)select.addEventListener('change',function(e){return selectCharacter(e)})});window.addEventListener('DOMContentLoaded',function(){return showData(window.location.search.replace('?',''))});window.addEventListener('resize',function(){if(window.matchMedia('(min-width: 767px)').matches){menu.classList.remove('arrow');nav.classList.remove('nav-expand')}});window.addEventListener('touchmove',function(e){if(Array.from(nav.classList).includes('nav-expand'))body.style.overflow='hidden';if(!Array.from(nav.classList).includes('nav-expand'))body.style.overflow='scroll';if(!Array.from(spinner.classList).includes('spinner--hidden'))body.style.overflow='hidden';if(Array.from(spinner.classList).includes('spinner--hidden'))body.style.overflow='scroll';a=doc.scrollTop});window.addEventListener('mousewheel',function(e){Array.from(nav.classList).includes('nav-expand')&&e.preventDefault();!Array.from(spinner.classList).includes('spinner--hidden')&&e.preventDefault();a=doc.scrollTop});window.addEventListener('scroll',function(e){b=doc.scrollTop;if(a<b&&b>71)header.style.top='-71px';if(b<71)header.style.top='0';if(a>b)header.style.top='0'});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5Iiwic3Bpbm5lciIsImdldEVsZW1lbnRCeUlkIiwiaGVhZGVyIiwibWVudSIsInRpdGxlIiwibmF2IiwiY2xvc2VNZW51IiwicGF0aHMiLCJpbWFnZXMiLCJwZW9wbGUiLCJmaWxtcyIsInBsYW5ldHMiLCJzcGVjaWVzIiwic3RhcnNoaXBzIiwidmVoaWNsZXMiLCJidXR0b25zIiwiY29udGFpbmVycyIsInNlbGVjdHMiLCJhIiwiYiIsImZvckVhY2giLCJwdXNoIiwicGF0aCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiaW5jbHVkZXMiLCJzZWFyY2giLCJyZXBsYWNlIiwiaHJlZiIsInNob3dQYWdlIiwicGFnZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInN0eWxlIiwidG9wIiwic2V0VGltZW91dCIsInRvZ2dsZU1lbnUiLCJ0b2dnbGUiLCJkcmF3UmVzcG9uc2UiLCJyZXNwb25zZSIsImNvbnRhaW5lciIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJhZGQiLCJyZXMiLCJpbmRleCIsImluc2VydEFkamFjZW50SFRNTCIsIm5hbWUiLCJzcGxpdCIsInRvTG93ZXJDYXNlIiwiZ2VuZGVyIiwiYmlydGhfeWVhciIsImhlaWdodCIsIm1hc3MiLCJkaWFtZXRlciIsImNsaW1hdGUiLCJncmF2aXR5IiwicG9wdWxhdGlvbiIsImVwaXNvZGVfaWQiLCJkaXJlY3RvciIsInByb2R1Y2VyIiwicmVsZWFzZV9kYXRlIiwiY2xhc3NpZmljYXRpb24iLCJkZXNpZ25hdGlvbiIsImxhbmd1YWdlIiwiaG9tZXdvcmxkIiwibW9kZWwiLCJtYW51ZmFjdHVyZXIiLCJjYXJnb19jYXBhY2l0eSIsInBhc3NlbmdlcnMiLCJzdGFyc2hpcF9jbGFzcyIsImFwcGVuZENoaWxkIiwicmVxdWVzdCIsImVuZFBvaW50IiwiZmV0Y2giLCJ0aGVuIiwic3RhdHVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRzIiwiY2F0Y2giLCJlcnJvciIsInNob3dEYXRhIiwiaWQiLCJzZWxlY3RDaGFyYWN0ZXIiLCJlIiwiY2FyZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FyZCIsInRhcmdldCIsInZhbHVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJ1dHRvbiIsInNlbGVjdCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiQXJyYXkiLCJmcm9tIiwib3ZlcmZsb3ciLCJzY3JvbGxUb3AiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6ImFBQUEsR0FBTUEsS0FBTUMsU0FBU0MsZUFBckIsQ0FDQSxHQUFNQyxNQUFPRixTQUFTRSxJQUF0QixDQUNBLEdBQU1DLFNBQVVILFNBQVNJLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBaEIsQ0FDQSxHQUFNQyxRQUFTTCxTQUFTSSxjQUFULENBQXdCLFFBQXhCLENBQWYsQ0FDQSxHQUFNRSxNQUFPTixTQUFTSSxjQUFULENBQXdCLE1BQXhCLENBQWIsQ0FDQSxHQUFNRyxPQUFRUCxTQUFTSSxjQUFULENBQXdCLE9BQXhCLENBQWQsQ0FDQSxHQUFNSSxLQUFNUixTQUFTSSxjQUFULENBQXdCLEtBQXhCLENBQVosQ0FDQSxHQUFNSyxXQUFZVCxTQUFTSSxjQUFULENBQXdCLFdBQXhCLENBQWxCLENBQ0EsR0FBTU0sT0FBUSxDQUNaLE9BRFksQ0FFWixRQUZZLENBR1osU0FIWSxDQUlaLE9BSlksQ0FLWixTQUxZLENBTVosVUFOWSxDQU9aLFdBUFksQ0FBZCxDQVNBLEdBQU1DLFFBQVMsQ0FDYkMsT0FBUSxDQUNOLDRCQURNLENBRU4sNEJBRk0sQ0FHTiw0QkFITSxDQUlOLDhCQUpNLENBS04sNEJBTE0sQ0FNTiw0QkFOTSxDQU9OLDRCQVBNLENBUU4sNEJBUk0sQ0FTTiw2QkFUTSxDQVVOLDJCQVZNLENBREssQ0FhYkMsTUFBTyxDQUNMLHdCQURLLENBRUwsd0JBRkssQ0FHTCx3QkFISyxDQUlMLHdCQUpLLENBS0wsd0JBTEssQ0FNTCx3QkFOSyxDQU9MLHdCQVBLLENBYk0sQ0FzQmJDLFFBQVMsQ0FDUCxpQ0FETyxDQUVQLDhCQUZPLENBR1AsNkJBSE8sQ0FJUCxnQ0FKTyxDQUtQLCtCQUxPLENBTVAsOEJBTk8sQ0FPUCw4QkFQTyxDQVFQLGtDQVJPLENBU1AsK0JBVE8sQ0FVUCxpQ0FWTyxDQXRCSSxDQWtDYkMsUUFBUyxDQUNQLDZCQURPLENBRVAsNkJBRk8sQ0FHUCxtQ0FITyxDQUlQLDRCQUpPLENBS1AsNkJBTE8sQ0FNUCxrQ0FOTyxDQU9QLGtDQVBPLENBUVAsK0JBUk8sQ0FTUCxrQ0FUTyxDQVVQLDRCQVZPLENBbENJLENBOENiQyxVQUFXLENBQ1QsbUNBRFMsQ0FFVCxtQ0FGUyxDQUdULGdDQUhTLENBSVQscUNBSlMsQ0FLVCxpQ0FMUyxDQU1ULGlDQU5TLENBT1Qsc0NBUFMsQ0FRVCxnQ0FSUyxDQVNULG1DQVRTLENBVVQsK0JBVlMsQ0E5Q0UsQ0EwRGJDLFNBQVUsQ0FDUiw4QkFEUSxDQUVSLDhCQUZRLENBR1IsOEJBSFEsQ0FJUixnQ0FKUSxDQUtSLHFDQUxRLENBTVIsb0NBTlEsQ0FPUiwrQkFQUSxDQVFSLCtCQVJRLENBU1IsK0JBVFEsQ0FVUiw4QkFWUSxDQTFERyxDQUFmLENBdUVBLEdBQU1DLFNBQVUsRUFBaEIsQ0FDQSxHQUFNQyxZQUFhLEVBQW5CLENBQ0EsR0FBTUMsU0FBVSxFQUFoQixDQUVBLEdBQUlDLFNBQUosQ0FDQSxHQUFJQyxTQUFKLENBRUFaLE1BQU1hLE9BQU4sQ0FBYyxjQUFRLENBQ3BCTCxRQUFRTSxJQUFSLENBQWF4QixTQUFTSSxjQUFULENBQXdCcUIsSUFBeEIsQ0FBYixFQUNBTixXQUFXSyxJQUFYLENBQWdCeEIsU0FBU0ksY0FBVCxjQUFxQ3FCLElBQXJDLENBQWhCLEVBQ0FMLFFBQVFJLElBQVIsQ0FBYXhCLFNBQVNJLGNBQVQsV0FBa0NxQixJQUFsQyxDQUFiLENBQ0QsQ0FKRCxFQU1BO0FBQ0EsR0FBSUMsT0FBT0MsUUFBUCxDQUFnQkMsTUFBaEIsR0FBMkIsMkNBQTNCLEVBQTBFLENBQUNsQixNQUFNbUIsUUFBTixDQUFlSCxPQUFPQyxRQUFQLENBQWdCRyxNQUFoQixDQUF1QkMsT0FBdkIsQ0FBK0IsR0FBL0IsQ0FBb0MsRUFBcEMsQ0FBZixDQUEvRSxDQUF3SSxDQUN0SUwsT0FBT0MsUUFBUCxDQUFnQkssSUFBaEIsQ0FBdUIsa0RBQ3hCLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFFQSxHQUFNQyxVQUFXLFFBQVhBLFNBQVcsQ0FBQ0MsSUFBRCxDQUFVLENBQ3pCMUIsSUFBSTJCLFNBQUosQ0FBY0MsTUFBZCxDQUFxQixZQUFyQixFQUNBOUIsS0FBSzZCLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixPQUF0QixFQUNBakMsUUFBUWdDLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLGlCQUF6QixFQUNBL0IsT0FBT2dDLEtBQVAsQ0FBYUMsR0FBYixDQUFtQixHQUFuQixDQUNBQyxXQUFXLFVBQU0sQ0FDZmIsT0FBT0MsUUFBUCxDQUFnQkcsTUFBaEIsS0FBNkJJLElBQzlCLENBRkQsQ0FFRyxHQUZILENBR0QsQ0FSRCxDQVVBLEdBQU1NLFlBQWEsUUFBYkEsV0FBYSxFQUFNLENBQ3ZCbEMsS0FBSzZCLFNBQUwsQ0FBZU0sTUFBZixDQUFzQixPQUF0QixFQUNBakMsSUFBSTJCLFNBQUosQ0FBY00sTUFBZCxDQUFxQixZQUFyQixDQUNELENBSEQsQ0FLQSxHQUFNQyxjQUFlLFFBQWZBLGFBQWUsQ0FBQ0MsUUFBRCxDQUFXQyxTQUFYLENBQXlCLENBQzVDLEdBQU1DLEtBQU03QyxTQUFTOEMsYUFBVCxDQUF1QixLQUF2QixDQUFaLENBQ0FELElBQUlWLFNBQUosQ0FBY1ksR0FBZCxDQUFrQixpQkFBbEIsRUFFQUosU0FBU3BCLE9BQVQsQ0FBaUIsU0FBQ3lCLEdBQUQsQ0FBTUMsS0FBTixDQUFnQixDQUMvQixPQUFRdkIsT0FBT0MsUUFBUCxDQUFnQkcsTUFBeEIsRUFDRSxJQUFLLFNBQUwsQ0FDRWUsSUFBSUssa0JBQUosQ0FBdUIsV0FBdkIsc0NBQzBCRixJQUFJRyxJQUFKLENBQVNDLEtBQVQsQ0FBZSxHQUFmLEVBQW9CLENBQXBCLEVBQXVCQyxXQUF2QixFQUQxQiw0Q0FFOEJMLElBQUlHLElBQUosQ0FBU0UsV0FBVCxFQUY5QixpQ0FHZ0IxQyxPQUFPaUMsU0FBUCxFQUFrQkssS0FBbEIsQ0FIaEIsNkdBSW9FRCxJQUFJTSxNQUFKLENBQVdELFdBQVgsRUFKcEUsK0ZBS3dFTCxJQUFJTyxVQUFKLENBQWVGLFdBQWYsRUFMeEUsNkZBTXNFTCxJQUFJUSxNQUFKLENBQVdILFdBQVgsRUFOdEUseUZBT2tFTCxJQUFJUyxJQUFKLENBQVNKLFdBQVQsRUFQbEUsNENBVUEsTUFDRixJQUFLLFVBQUwsQ0FDRVIsSUFBSUssa0JBQUosQ0FBdUIsV0FBdkIsc0NBQzBCRixJQUFJRyxJQUFKLENBQVNDLEtBQVQsQ0FBZSxHQUFmLEVBQW9CLENBQXBCLEVBQXVCQyxXQUF2QixFQUQxQiw0Q0FFOEJMLElBQUlHLElBQUosQ0FBU0UsV0FBVCxFQUY5QixpQ0FHZ0IxQyxPQUFPaUMsU0FBUCxFQUFrQkssS0FBbEIsQ0FIaEIsK0dBSXNFRCxJQUFJVSxRQUFKLENBQWFMLFdBQWIsRUFKdEUsMEZBS21FTCxJQUFJVyxPQUFKLENBQVlOLFdBQVosRUFMbkUsNkZBTXNFTCxJQUFJWSxPQUFKLENBQVlQLFdBQVosRUFOdEUsaUdBT3VFTCxJQUFJYSxVQUFKLENBQWVSLFdBQWYsRUFQdkUsNENBVUEsTUFDRixJQUFLLFFBQUwsQ0FDRVIsSUFBSUssa0JBQUosQ0FBdUIsV0FBdkIsK0NBQ21DRixJQUFJYyxVQUR2Qyw0Q0FFOEJkLElBQUl6QyxLQUFKLENBQVU4QyxXQUFWLEVBRjlCLGlDQUdnQjFDLE9BQU9pQyxTQUFQLEVBQWtCSyxLQUFsQixDQUhoQiwrR0FJc0VELElBQUljLFVBSjFFLDZGQUtzRWQsSUFBSWUsUUFBSixDQUFhVixXQUFiLEVBTHRFLDhGQU11RUwsSUFBSWdCLFFBQUosQ0FBYVgsV0FBYixFQU52RSxnR0FPeUVMLElBQUlpQixZQUFKLENBQWlCWixXQUFqQixFQVB6RSw0Q0FVQSxNQUNGLElBQUssVUFBTCxDQUNFUixJQUFJSyxrQkFBSixDQUF1QixXQUF2QixzQ0FDMEJGLElBQUlHLElBQUosQ0FBU0MsS0FBVCxDQUFlLEdBQWYsRUFBb0IsQ0FBcEIsRUFBdUJDLFdBQXZCLEVBRDFCLDRDQUU4QkwsSUFBSUcsSUFBSixDQUFTRSxXQUFULEVBRjlCLGlDQUdnQjFDLE9BQU9pQyxTQUFQLEVBQWtCSyxLQUFsQixDQUhoQix1SEFJMkVELElBQUlrQixjQUFKLENBQW1CYixXQUFuQixFQUozRSxtR0FLeUVMLElBQUltQixXQUFKLENBQWdCZCxXQUFoQixFQUx6RSw2RkFNc0VMLElBQUlvQixRQUFKLENBQWFmLFdBQWIsRUFOdEUsNEZBT3FFTCxJQUFJcUIsU0FBSixDQUFjaEIsV0FBZCxFQVByRSw0Q0FVQSxNQUNGLElBQUssV0FBTCxDQUNFUixJQUFJSyxrQkFBSixDQUF1QixXQUF2QixzQ0FDMEJGLElBQUlHLElBQUosQ0FBU0MsS0FBVCxDQUFlLEdBQWYsRUFBb0IsQ0FBcEIsRUFBdUJDLFdBQXZCLEVBRDFCLDRDQUU4QkwsSUFBSUcsSUFBSixDQUFTRSxXQUFULEVBRjlCLGlDQUdnQjFDLE9BQU9pQyxTQUFQLEVBQWtCSyxLQUFsQixDQUhoQiw2R0FJb0VELElBQUlzQixLQUFKLENBQVVqQixXQUFWLEVBSnBFLCtGQUt3RUwsSUFBSXVCLFlBQUosQ0FBaUJsQixXQUFqQixFQUx4RSw4RkFNdUVMLElBQUl3QixjQUFKLENBQW1CbkIsV0FBbkIsRUFOdkUsOEZBT3VFTCxJQUFJeUIsVUFBSixDQUFlcEIsV0FBZixFQVB2RSw0Q0FVQSxNQUNGLElBQUssWUFBTCxDQUNFUixJQUFJSyxrQkFBSixDQUF1QixXQUF2QixzQ0FDMEJGLElBQUlHLElBQUosQ0FBU0MsS0FBVCxDQUFlLEdBQWYsRUFBb0IsQ0FBcEIsRUFBdUJDLFdBQXZCLEVBRDFCLDRDQUU4QkwsSUFBSUcsSUFBSixDQUFTRSxXQUFULEVBRjlCLGlDQUdnQjFDLE9BQU9pQyxTQUFQLEVBQWtCSyxLQUFsQixDQUhoQiw2R0FJb0VELElBQUlzQixLQUFKLENBQVVqQixXQUFWLEVBSnBFLHlGQUtrRUwsSUFBSTBCLGNBQUosQ0FBbUJyQixXQUFuQixFQUxsRSwrRkFNd0VMLElBQUl1QixZQUFKLENBQWlCbEIsV0FBakIsRUFOeEUsOEZBT3VFTCxJQUFJeUIsVUFBSixDQUFlcEIsV0FBZixFQVB2RSw0Q0FVQSxNQXhFSixDQTBFRCxDQTNFRCxFQTRFQXJELFNBQVNJLGNBQVQsb0JBQTJDd0MsU0FBM0MsRUFBd0QrQixXQUF4RCxDQUFvRTlCLEdBQXBFLEVBRUEsR0FBTTFDLFNBQVVILFNBQVNJLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBaEIsQ0FDQW1DLFdBQVcsVUFBTSxDQUNmcEMsUUFBUWdDLFNBQVIsQ0FBa0JZLEdBQWxCLENBQXNCLGlCQUF0QixDQUNELENBRkQsQ0FFRyxHQUZILENBR0QsQ0F0RkQsQ0F3RkEsR0FBTTZCLFNBQVUsUUFBVkEsUUFBVSxDQUFDQyxRQUFELENBQWMsQ0FDNUJDLDhCQUE4QkQsUUFBOUIsRUFDR0UsSUFESCxDQUNRLGFBQU8sQ0FDWCxPQUFRL0IsSUFBSWdDLE1BQVosRUFDRSxJQUFLLElBQUwsQ0FDRSxNQUFPaEMsS0FBSWlDLElBQUosRUFBUCxDQUNGLFFBQ0VDLFFBQVFDLEdBQVIsQ0FBWSxPQUFaLEVBQ0EsTUFMSixDQU9ELENBVEgsRUFVR0osSUFWSCxDQVVRLHFCQUFRckMsY0FBYXVDLEtBQUtHLE9BQWxCLENBQTJCUCxRQUEzQixDQUFSLENBVlIsRUFXR1EsS0FYSCxDQVdTLHNCQUFTSCxTQUFRQyxHQUFSLENBQVlHLEtBQVosQ0FBVCxDQVhULENBWUQsQ0FiRCxDQWVBLEdBQU1DLFVBQVcsUUFBWEEsU0FBVyxDQUFDVixRQUFELENBQWMsQ0FDN0IxRCxXQUFXSSxPQUFYLENBQW1CLFNBQUNxQixTQUFELENBQVlLLEtBQVosQ0FBc0IsQ0FDdkMsR0FBSUwsVUFBVTRDLEVBQVYsQ0FBYTNELFFBQWIsQ0FBc0JILE9BQU9DLFFBQVAsQ0FBZ0JHLE1BQWhCLENBQXVCQyxPQUF2QixDQUErQixHQUEvQixDQUFvQyxFQUFwQyxDQUF0QixDQUFKLENBQW9FYSxVQUFVVCxTQUFWLENBQW9CQyxNQUFwQixDQUEyQixXQUEzQixFQUNwRSxHQUFJbEIsUUFBUStCLEtBQVIsRUFBZXVDLEVBQWYsR0FBc0I5RCxPQUFPQyxRQUFQLENBQWdCRyxNQUFoQixDQUF1QkMsT0FBdkIsQ0FBK0IsR0FBL0IsQ0FBb0MsRUFBcEMsQ0FBMUIsQ0FBbUViLFFBQVErQixLQUFSLEVBQWVkLFNBQWYsQ0FBeUJZLEdBQXpCLENBQTZCLGtCQUE3QixDQUNwRSxDQUhELEVBS0EsR0FBSXJCLE9BQU9DLFFBQVAsQ0FBZ0JHLE1BQWhCLEdBQTJCLFFBQS9CLENBQXlDLENBQ3ZDOEMsUUFBUUMsUUFBUixDQUNELENBRkQsSUFFTyxDQUNMLEdBQU0xRSxVQUFVSCxTQUFTSSxjQUFULENBQXdCLFNBQXhCLENBQWhCLENBQ0FtQyxXQUFXLFVBQU0sQ0FDZnBDLFNBQVFnQyxTQUFSLENBQWtCWSxHQUFsQixDQUFzQixpQkFBdEIsQ0FDRCxDQUZELENBRUcsR0FGSCxDQUdELENBQ0YsQ0FkRCxDQWdCQSxHQUFNMEMsaUJBQWtCLFFBQWxCQSxnQkFBa0IsQ0FBQ0MsQ0FBRCxDQUFPLENBQzdCLEdBQUlDLE9BQVEzRixTQUFTNEYsZ0JBQVQsQ0FBMEIsT0FBMUIsQ0FBWixDQUNBRCxNQUFNcEUsT0FBTixDQUFjLFNBQUNzRSxJQUFELENBQVUsQ0FDdEJBLEtBQUsxRCxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsV0FBdEIsRUFDQSxHQUFJc0QsRUFBRUksTUFBRixDQUFTQyxLQUFULEdBQW1CLEtBQXZCLENBQThCRixLQUFLMUQsU0FBTCxDQUFlQyxNQUFmLENBQXNCLFdBQXRCLEVBQTlCLElBQ0ssSUFBSXNELEVBQUVJLE1BQUYsQ0FBU0MsS0FBVCxHQUFtQkYsS0FBS0wsRUFBNUIsQ0FBZ0NLLEtBQUsxRCxTQUFMLENBQWVZLEdBQWYsQ0FBbUIsV0FBbkIsQ0FDdEMsQ0FKRCxDQUtELENBUEQsQ0FTQXhDLE1BQU15RixnQkFBTixDQUF1QixPQUF2QixDQUFnQyxVQUFNLENBQUV0RSxPQUFPQyxRQUFQLENBQWdCRyxNQUFoQixDQUF5QixPQUFTLENBQTFFLEVBQ0F4QixLQUFLMEYsZ0JBQUwsQ0FBc0IsT0FBdEIsQ0FBK0J4RCxVQUEvQixFQUNBL0IsVUFBVXVGLGdCQUFWLENBQTJCLE9BQTNCLENBQW9DeEQsVUFBcEMsRUFDQXRCLFFBQVFLLE9BQVIsQ0FBZ0IsU0FBQzBFLE1BQUQsQ0FBU2hELEtBQVQsQ0FBbUIsQ0FDakNnRCxPQUFPRCxnQkFBUCxDQUF3QixPQUF4QixDQUFpQyxpQkFBTS9ELFVBQVN2QixNQUFNdUMsS0FBTixDQUFULENBQU4sQ0FBakMsQ0FDRCxDQUZELEVBR0E3QixRQUFRRyxPQUFSLENBQWdCLGdCQUFVLENBQ3hCLEdBQUkyRSxNQUFKLENBQVlBLE9BQU9GLGdCQUFQLENBQXdCLFFBQXhCLENBQWtDLFNBQUNOLENBQUQsUUFBT0QsaUJBQWdCQyxDQUFoQixDQUFQLENBQWxDLENBQ2IsQ0FGRCxFQUlBaEUsT0FBT3NFLGdCQUFQLENBQXdCLGtCQUF4QixDQUE0QyxpQkFBTVQsVUFBUzdELE9BQU9DLFFBQVAsQ0FBZ0JHLE1BQWhCLENBQXVCQyxPQUF2QixDQUErQixHQUEvQixDQUFvQyxFQUFwQyxDQUFULENBQU4sQ0FBNUMsRUFDQUwsT0FBT3NFLGdCQUFQLENBQXdCLFFBQXhCLENBQWtDLFVBQU0sQ0FDdEMsR0FBSXRFLE9BQU95RSxVQUFQLENBQWtCLG9CQUFsQixFQUF3Q0MsT0FBNUMsQ0FBcUQsQ0FDbkQ5RixLQUFLNkIsU0FBTCxDQUFlQyxNQUFmLENBQXNCLE9BQXRCLEVBQ0E1QixJQUFJMkIsU0FBSixDQUFjQyxNQUFkLENBQXFCLFlBQXJCLENBQ0QsQ0FDRixDQUxELEVBTUFWLE9BQU9zRSxnQkFBUCxDQUF3QixXQUF4QixDQUFxQyxTQUFDTixDQUFELENBQU8sQ0FDMUMsR0FBSVcsTUFBTUMsSUFBTixDQUFXOUYsSUFBSTJCLFNBQWYsRUFBMEJOLFFBQTFCLENBQW1DLFlBQW5DLENBQUosQ0FBc0QzQixLQUFLbUMsS0FBTCxDQUFXa0UsUUFBWCxDQUFzQixRQUF0QixDQUN0RCxHQUFJLENBQUNGLE1BQU1DLElBQU4sQ0FBVzlGLElBQUkyQixTQUFmLEVBQTBCTixRQUExQixDQUFtQyxZQUFuQyxDQUFMLENBQXVEM0IsS0FBS21DLEtBQUwsQ0FBV2tFLFFBQVgsQ0FBc0IsUUFBdEIsQ0FDdkQsR0FBSSxDQUFDRixNQUFNQyxJQUFOLENBQVduRyxRQUFRZ0MsU0FBbkIsRUFBOEJOLFFBQTlCLENBQXVDLGlCQUF2QyxDQUFMLENBQWdFM0IsS0FBS21DLEtBQUwsQ0FBV2tFLFFBQVgsQ0FBc0IsUUFBdEIsQ0FDaEUsR0FBSUYsTUFBTUMsSUFBTixDQUFXbkcsUUFBUWdDLFNBQW5CLEVBQThCTixRQUE5QixDQUF1QyxpQkFBdkMsQ0FBSixDQUErRDNCLEtBQUttQyxLQUFMLENBQVdrRSxRQUFYLENBQXNCLFFBQXRCLENBQy9EbEYsRUFBSXRCLElBQUl5RyxTQUNULENBTkQsRUFPQTlFLE9BQU9zRSxnQkFBUCxDQUF3QixZQUF4QixDQUFzQyxTQUFDTixDQUFELENBQU8sQ0FDM0NXLE1BQU1DLElBQU4sQ0FBVzlGLElBQUkyQixTQUFmLEVBQTBCTixRQUExQixDQUFtQyxZQUFuQyxHQUFvRDZELEVBQUVlLGNBQUYsRUFBcEQsQ0FDQSxDQUFDSixNQUFNQyxJQUFOLENBQVduRyxRQUFRZ0MsU0FBbkIsRUFBOEJOLFFBQTlCLENBQXVDLGlCQUF2QyxDQUFELEVBQThENkQsRUFBRWUsY0FBRixFQUE5RCxDQUNBcEYsRUFBSXRCLElBQUl5RyxTQUNULENBSkQsRUFLQTlFLE9BQU9zRSxnQkFBUCxDQUF3QixRQUF4QixDQUFrQyxTQUFDTixDQUFELENBQU8sQ0FDdkNwRSxFQUFJdkIsSUFBSXlHLFNBQVIsQ0FDQSxHQUFJbkYsRUFBSUMsQ0FBSixFQUFTQSxFQUFJLEVBQWpCLENBQXFCakIsT0FBT2dDLEtBQVAsQ0FBYUMsR0FBYixDQUFtQixPQUFuQixDQUNyQixHQUFJaEIsRUFBSSxFQUFSLENBQVlqQixPQUFPZ0MsS0FBUCxDQUFhQyxHQUFiLENBQW1CLEdBQW5CLENBQ1osR0FBSWpCLEVBQUlDLENBQVIsQ0FBV2pCLE9BQU9nQyxLQUFQLENBQWFDLEdBQWIsQ0FBbUIsR0FDL0IsQ0FMRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keVxuY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGlubmVyJylcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKVxuY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJylcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYnKVxuY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlTWVudScpXG5jb25zdCBwYXRocyA9IFtcbiAgJ2luZGV4JyxcbiAgJ3Blb3BsZScsXG4gICdwbGFuZXRzJyxcbiAgJ2ZpbG1zJyxcbiAgJ3NwZWNpZXMnLFxuICAndmVoaWNsZXMnLFxuICAnc3RhcnNoaXBzJ1xuXVxuY29uc3QgaW1hZ2VzID0ge1xuICBwZW9wbGU6IFtcbiAgICAnLi9kaXN0L2ltZy9wZW9wbGUvbHVrZS5qcGcnLFxuICAgICcuL2Rpc3QvaW1nL3Blb3BsZS9jM3BvLmpwZycsXG4gICAgJy4vZGlzdC9pbWcvcGVvcGxlL3IyZDIuaWNvJyxcbiAgICAnLi9kaXN0L2ltZy9wZW9wbGUvZGFydGguanBlZycsXG4gICAgJy4vZGlzdC9pbWcvcGVvcGxlL2xlaWEuanBnJyxcbiAgICAnLi9kaXN0L2ltZy9wZW9wbGUvb3dlbi5qcGcnLFxuICAgICcuL2Rpc3QvaW1nL3Blb3BsZS9iZXJ1LmpwZycsXG4gICAgJy4vZGlzdC9pbWcvcGVvcGxlL3I1ZDUuanBnJyxcbiAgICAnLi9kaXN0L2ltZy9wZW9wbGUvYmlnZ3MuanBnJyxcbiAgICAnLi9kaXN0L2ltZy9wZW9wbGUvb2JpLmpwZydcbiAgXSxcbiAgZmlsbXM6IFtcbiAgICAnLi9kaXN0L2ltZy9maWxtcy80LmpwZycsXG4gICAgJy4vZGlzdC9pbWcvZmlsbXMvMi5qcGcnLFxuICAgICcuL2Rpc3QvaW1nL2ZpbG1zLzEuanBnJyxcbiAgICAnLi9kaXN0L2ltZy9maWxtcy8zLmpwZycsXG4gICAgJy4vZGlzdC9pbWcvZmlsbXMvNi5qcGcnLFxuICAgICcuL2Rpc3QvaW1nL2ZpbG1zLzUuanBnJyxcbiAgICAnLi9kaXN0L2ltZy9maWxtcy83LmpwZydcbiAgXSxcbiAgcGxhbmV0czogW1xuICAgICcuL2Rpc3QvaW1nL3BsYW5ldHMvYWxkZXJhYW4uanBnJyxcbiAgICAnLi9kaXN0L2ltZy9wbGFuZXRzL3lhdmluLmpwZycsXG4gICAgJy4vZGlzdC9pbWcvcGxhbmV0cy9ob3RoLmpwZycsXG4gICAgJy4vZGlzdC9pbWcvcGxhbmV0cy9kYWdvYmFoLmpwZycsXG4gICAgJy4vZGlzdC9pbWcvcGxhbmV0cy9iZXNwaW4uanBnJyxcbiAgICAnLi9kaXN0L2ltZy9wbGFuZXRzL2VuZG9yLmpwZycsXG4gICAgJy4vZGlzdC9pbWcvcGxhbmV0cy9uYWJvby5qcGcnLFxuICAgICcuL2Rpc3QvaW1nL3BsYW5ldHMvY29ydXNjYW50LmpwZycsXG4gICAgJy4vZGlzdC9pbWcvcGxhbmV0cy9rYW1pbm8uanBnJyxcbiAgICAnLi9kaXN0L2ltZy9wbGFuZXRzL2dlb25vc2lzLmpwZydcbiAgXSxcbiAgc3BlY2llczogW1xuICAgICcuL2Rpc3QvaW1nL3NwZWNpZXMvaHV0dC5qcGcnLFxuICAgICcuL2Rpc3QvaW1nL3NwZWNpZXMveW9kYS5qcGcnLFxuICAgICcuL2Rpc3QvaW1nL3NwZWNpZXMvdHJhbmRvc2hhbi5qcGcnLFxuICAgICcuL2Rpc3QvaW1nL3NwZWNpZXMvbW9uLmpwZycsXG4gICAgJy4vZGlzdC9pbWcvc3BlY2llcy9ld29rLmpwZycsXG4gICAgJy4vZGlzdC9pbWcvc3BlY2llcy9zdWxsdXN0YW4uanBnJyxcbiAgICAnLi9kaXN0L2ltZy9zcGVjaWVzL25laW1vZGlhbi5qcGcnLFxuICAgICcuL2Rpc3QvaW1nL3NwZWNpZXMvZ3VuZ2FuLmpwZycsXG4gICAgJy4vZGlzdC9pbWcvc3BlY2llcy90b3lkYXJpYW4uanBnJyxcbiAgICAnLi9kaXN0L2ltZy9zcGVjaWVzL2R1Zy5qcGcnXG4gIF0sXG4gIHN0YXJzaGlwczogW1xuICAgICcuL2Rpc3QvaW1nL3N0YXJzaGlwcy9leGVjdXRvci5qcGcnLFxuICAgICcuL2Rpc3QvaW1nL3N0YXJzaGlwcy9zZW50aW5lbC5qcGcnLFxuICAgICcuL2Rpc3QvaW1nL3N0YXJzaGlwcy9kZWF0aC5qcGcnLFxuICAgICcuL2Rpc3QvaW1nL3N0YXJzaGlwcy9taWxsZW5uaXVtLmpwZycsXG4gICAgJy4vZGlzdC9pbWcvc3RhcnNoaXBzL3ktd2luZy5qcGcnLFxuICAgICcuL2Rpc3QvaW1nL3N0YXJzaGlwcy94LXdpbmcuanBnJyxcbiAgICAnLi9kaXN0L2ltZy9zdGFyc2hpcHMvdGllLWFkdmFuY2UuanBnJyxcbiAgICAnLi9kaXN0L2ltZy9zdGFyc2hpcHMvc2xhdmUuaWNvJyxcbiAgICAnLi9kaXN0L2ltZy9zdGFyc2hpcHMvaW1wZXJpYWwuanBnJyxcbiAgICAnLi9kaXN0L2ltZy9zdGFyc2hpcHMvZWY3Ni5qcGcnXG4gIF0sXG4gIHZlaGljbGVzOiBbXG4gICAgJy4vZGlzdC9pbWcvdmVoaWNsZXMvc2FuZC5qcGcnLFxuICAgICcuL2Rpc3QvaW1nL3ZlaGljbGVzL3QtMTYuanBnJyxcbiAgICAnLi9kaXN0L2ltZy92ZWhpY2xlcy94LTM0LmpwZycsXG4gICAgJy4vZGlzdC9pbWcvdmVoaWNsZXMvdGllLWxuLmpwZycsXG4gICAgJy4vZGlzdC9pbWcvdmVoaWNsZXMvc25vd3NwZWVkZXIuanBnJyxcbiAgICAnLi9kaXN0L2ltZy92ZWhpY2xlcy90aWUtYm9tYmVyLnBuZycsXG4gICAgJy4vZGlzdC9pbWcvdmVoaWNsZXMvYXQtYXQuanBnJyxcbiAgICAnLi9kaXN0L2ltZy92ZWhpY2xlcy9hdC1zdC5qcGcnLFxuICAgICcuL2Rpc3QvaW1nL3ZlaGljbGVzL3N0b3JtLmpwZycsXG4gICAgJy4vZGlzdC9pbWcvdmVoaWNsZXMvc2FpbC5qcGcnXG4gIF1cbn1cbmNvbnN0IGJ1dHRvbnMgPSBbXVxuY29uc3QgY29udGFpbmVycyA9IFtdXG5jb25zdCBzZWxlY3RzID0gW11cblxubGV0IGFcbmxldCBiXG5cbnBhdGhzLmZvckVhY2gocGF0aCA9PiB7XG4gIGJ1dHRvbnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXRoKSlcbiAgY29udGFpbmVycy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjb250YWluZXItJHtwYXRofWApKVxuICBzZWxlY3RzLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNlbGVjdC0ke3BhdGh9YCkpXG59KVxuXG4vLyBFbiBnaXRodWIgcGFnZXNcbmlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luID09PSAnaHR0cHM6Ly9qdWFuYW50bzExLmdpdGh1Yi5pby9hcGktc3RhcndhcnMnICYmICFwYXRocy5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJykpKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2h0dHBzOi8vanVhbmFudG8xMS5naXRodWIuaW8vYXBpLXN0YXJ3YXJzLz9pbmRleCdcbn1cblxuLy8gRW4gZGVzYXJyb2xsb1xuLy8gaWYgKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPT09ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnICYmICFwYXRocy5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJykpKSB7XG4vLyAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8/aW5kZXgnXG4vLyB9XG5cbmNvbnN0IHNob3dQYWdlID0gKHBhZ2UpID0+IHtcbiAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1leHBhbmQnKVxuICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2Fycm93JylcbiAgc3Bpbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdzcGlubmVyLS1oaWRkZW4nKVxuICBoZWFkZXIuc3R5bGUudG9wID0gJzAnXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggPSBgPyR7cGFnZX1gXG4gIH0sIDUwMClcbn1cblxuY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhcnJvdycpXG4gIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCduYXYtZXhwYW5kJylcbn1cblxuY29uc3QgZHJhd1Jlc3BvbnNlID0gKHJlc3BvbnNlLCBjb250YWluZXIpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmRzLWNvbnRhaW5lcicpXG5cbiAgcmVzcG9uc2UuZm9yRWFjaCgocmVzLCBpbmRleCkgPT4ge1xuICAgIHN3aXRjaCAod2luZG93LmxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgY2FzZSAnP3Blb3BsZSc6XG4gICAgICAgIGRpdi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIGlkPVwiJHtyZXMubmFtZS5zcGxpdCgnICcpWzBdLnRvTG93ZXJDYXNlKCl9XCI+XG4gICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkX190aXRsZVwiPiR7cmVzLm5hbWUudG9Mb3dlckNhc2UoKX08L2g0PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1tjb250YWluZXJdW2luZGV4XX1cIiBhbHQ9XCJcIiBjbGFzcz1cImNhcmRfX2ltYWdlXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX3RleHRcIj5HZW5lcm86IDxzcGFuIGNsYXNzPVwiY2FyZF9fdGV4dC0tYmxhY2tcIj4ke3Jlcy5nZW5kZXIudG9Mb3dlckNhc2UoKX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX190ZXh0XCI+TmFjaW1pZW50bzogPHNwYW4gY2xhc3M9XCJjYXJkX190ZXh0LS1ibGFja1wiPiR7cmVzLmJpcnRoX3llYXIudG9Mb3dlckNhc2UoKX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX190ZXh0XCI+RXN0YXR1cmE6IDxzcGFuIGNsYXNzPVwiY2FyZF9fdGV4dC0tYmxhY2tcIj4ke3Jlcy5oZWlnaHQudG9Mb3dlckNhc2UoKX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX190ZXh0XCI+UGVzbzogPHNwYW4gY2xhc3M9XCJjYXJkX190ZXh0LS1ibGFja1wiPiR7cmVzLm1hc3MudG9Mb3dlckNhc2UoKX08L3NwYW4+PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnP3BsYW5ldHMnOlxuICAgICAgICBkaXYuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBpZD1cIiR7cmVzLm5hbWUuc3BsaXQoJyAnKVswXS50b0xvd2VyQ2FzZSgpfVwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZF9fdGl0bGVcIj4ke3Jlcy5uYW1lLnRvTG93ZXJDYXNlKCl9PC9oND5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbY29udGFpbmVyXVtpbmRleF19XCIgYWx0PVwiXCIgY2xhc3M9XCJjYXJkX19pbWFnZVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX190ZXh0XCI+RGlhbWV0cm86IDxzcGFuIGNsYXNzPVwiY2FyZF9fdGV4dC0tYmxhY2tcIj4ke3Jlcy5kaWFtZXRlci50b0xvd2VyQ2FzZSgpfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX3RleHRcIj5DbGltYTogPHNwYW4gY2xhc3M9XCJjYXJkX190ZXh0LS1ibGFja1wiPiR7cmVzLmNsaW1hdGUudG9Mb3dlckNhc2UoKX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX190ZXh0XCI+R3JhdmVkYWQ6IDxzcGFuIGNsYXNzPVwiY2FyZF9fdGV4dC0tYmxhY2tcIj4ke3Jlcy5ncmF2aXR5LnRvTG93ZXJDYXNlKCl9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZF9fdGV4dFwiPlBvYmxhY2nDs246IDxzcGFuIGNsYXNzPVwiY2FyZF9fdGV4dC0tYmxhY2tcIj4ke3Jlcy5wb3B1bGF0aW9uLnRvTG93ZXJDYXNlKCl9PC9zcGFuPjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJz9maWxtcyc6XG4gICAgICAgIGRpdi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIGlkPVwiZXBpc29kaW9fJHtyZXMuZXBpc29kZV9pZH1cIj5cbiAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhcmRfX3RpdGxlXCI+JHtyZXMudGl0bGUudG9Mb3dlckNhc2UoKX08L2g0PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1tjb250YWluZXJdW2luZGV4XX1cIiBhbHQ9XCJcIiBjbGFzcz1cImNhcmRfX2ltYWdlXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX3RleHRcIj5FcGlzb2RpbzogPHNwYW4gY2xhc3M9XCJjYXJkX190ZXh0LS1ibGFja1wiPiR7cmVzLmVwaXNvZGVfaWR9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZF9fdGV4dFwiPkRpcmVjdG9yOiA8c3BhbiBjbGFzcz1cImNhcmRfX3RleHQtLWJsYWNrXCI+JHtyZXMuZGlyZWN0b3IudG9Mb3dlckNhc2UoKX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX190ZXh0XCI+UHJvZHVjdG9yOiA8c3BhbiBjbGFzcz1cImNhcmRfX3RleHQtLWJsYWNrXCI+JHtyZXMucHJvZHVjZXIudG9Mb3dlckNhc2UoKX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX190ZXh0XCI+TGFuemFtaWVudG86IDxzcGFuIGNsYXNzPVwiY2FyZF9fdGV4dC0tYmxhY2tcIj4ke3Jlcy5yZWxlYXNlX2RhdGUudG9Mb3dlckNhc2UoKX08L3NwYW4+PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnP3NwZWNpZXMnOlxuICAgICAgICBkaXYuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBpZD1cIiR7cmVzLm5hbWUuc3BsaXQoJyAnKVswXS50b0xvd2VyQ2FzZSgpfVwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZF9fdGl0bGVcIj4ke3Jlcy5uYW1lLnRvTG93ZXJDYXNlKCl9PC9oND5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbY29udGFpbmVyXVtpbmRleF19XCIgYWx0PVwiXCIgY2xhc3M9XCJjYXJkX19pbWFnZVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX190ZXh0XCI+Q2xhc2lmaWNhY2nDs246IDxzcGFuIGNsYXNzPVwiY2FyZF9fdGV4dC0tYmxhY2tcIj4ke3Jlcy5jbGFzc2lmaWNhdGlvbi50b0xvd2VyQ2FzZSgpfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX3RleHRcIj5EZXNpZ25hY2nDs246IDxzcGFuIGNsYXNzPVwiY2FyZF9fdGV4dC0tYmxhY2tcIj4ke3Jlcy5kZXNpZ25hdGlvbi50b0xvd2VyQ2FzZSgpfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX3RleHRcIj5MZW5ndWFqZTogPHNwYW4gY2xhc3M9XCJjYXJkX190ZXh0LS1ibGFja1wiPiR7cmVzLmxhbmd1YWdlLnRvTG93ZXJDYXNlKCl9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZF9fdGV4dFwiPlBsYW5ldGE6IDxzcGFuIGNsYXNzPVwiY2FyZF9fdGV4dC0tYmxhY2tcIj4ke3Jlcy5ob21ld29ybGQudG9Mb3dlckNhc2UoKX08L3NwYW4+PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnP3ZlaGljbGVzJzpcbiAgICAgICAgZGl2Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWQ9XCIke3Jlcy5uYW1lLnNwbGl0KCcgJylbMF0udG9Mb3dlckNhc2UoKX1cIj5cbiAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhcmRfX3RpdGxlXCI+JHtyZXMubmFtZS50b0xvd2VyQ2FzZSgpfTwvaDQ+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VzW2NvbnRhaW5lcl1baW5kZXhdfVwiIGFsdD1cIlwiIGNsYXNzPVwiY2FyZF9faW1hZ2VcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZF9fdGV4dFwiPk1vZGVsbzogPHNwYW4gY2xhc3M9XCJjYXJkX190ZXh0LS1ibGFja1wiPiR7cmVzLm1vZGVsLnRvTG93ZXJDYXNlKCl9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZF9fdGV4dFwiPkZhYnJpY2FudGU6IDxzcGFuIGNsYXNzPVwiY2FyZF9fdGV4dC0tYmxhY2tcIj4ke3Jlcy5tYW51ZmFjdHVyZXIudG9Mb3dlckNhc2UoKX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX190ZXh0XCI+Q2FwYWNpZGFkOiA8c3BhbiBjbGFzcz1cImNhcmRfX3RleHQtLWJsYWNrXCI+JHtyZXMuY2FyZ29fY2FwYWNpdHkudG9Mb3dlckNhc2UoKX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX190ZXh0XCI+UGFzYWplcm9zOiA8c3BhbiBjbGFzcz1cImNhcmRfX3RleHQtLWJsYWNrXCI+JHtyZXMucGFzc2VuZ2Vycy50b0xvd2VyQ2FzZSgpfTwvc3Bhbj48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGApXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICc/c3RhcnNoaXBzJzpcbiAgICAgICAgZGl2Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWQ9XCIke3Jlcy5uYW1lLnNwbGl0KCcgJylbMF0udG9Mb3dlckNhc2UoKX1cIj5cbiAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhcmRfX3RpdGxlXCI+JHtyZXMubmFtZS50b0xvd2VyQ2FzZSgpfTwvaDQ+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VzW2NvbnRhaW5lcl1baW5kZXhdfVwiIGFsdD1cIlwiIGNsYXNzPVwiY2FyZF9faW1hZ2VcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZF9fdGV4dFwiPk1vZGVsbzogPHNwYW4gY2xhc3M9XCJjYXJkX190ZXh0LS1ibGFja1wiPiR7cmVzLm1vZGVsLnRvTG93ZXJDYXNlKCl9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZF9fdGV4dFwiPlRpcG86IDxzcGFuIGNsYXNzPVwiY2FyZF9fdGV4dC0tYmxhY2tcIj4ke3Jlcy5zdGFyc2hpcF9jbGFzcy50b0xvd2VyQ2FzZSgpfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX3RleHRcIj5GYWJyaWNhbnRlOiA8c3BhbiBjbGFzcz1cImNhcmRfX3RleHQtLWJsYWNrXCI+JHtyZXMubWFudWZhY3R1cmVyLnRvTG93ZXJDYXNlKCl9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZF9fdGV4dFwiPlBhc2FqZXJvczogPHNwYW4gY2xhc3M9XCJjYXJkX190ZXh0LS1ibGFja1wiPiR7cmVzLnBhc3NlbmdlcnMudG9Mb3dlckNhc2UoKX08L3NwYW4+PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgKVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfSlcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvbnRhaW5lci1jYXJkcy0ke2NvbnRhaW5lcn1gKS5hcHBlbmRDaGlsZChkaXYpXG5cbiAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGlubmVyJylcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdzcGlubmVyLS1oaWRkZW4nKVxuICB9LCA1MDApXG59XG5cbmNvbnN0IHJlcXVlc3QgPSAoZW5kUG9pbnQpID0+IHtcbiAgZmV0Y2goYGh0dHBzOi8vc3dhcGkuY28vYXBpLyR7ZW5kUG9pbnR9YClcbiAgICAudGhlbihyZXMgPT4ge1xuICAgICAgc3dpdGNoIChyZXMuc3RhdHVzKSB7XG4gICAgICAgIGNhc2UgMjAwOlxuICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJylcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oanNvbiA9PiBkcmF3UmVzcG9uc2UoanNvbi5yZXN1bHRzLCBlbmRQb2ludCkpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbn1cblxuY29uc3Qgc2hvd0RhdGEgPSAoZW5kUG9pbnQpID0+IHtcbiAgY29udGFpbmVycy5mb3JFYWNoKChjb250YWluZXIsIGluZGV4KSA9PiB7XG4gICAgaWYgKGNvbnRhaW5lci5pZC5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJykpKSBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJylcbiAgICBpZiAoYnV0dG9uc1tpbmRleF0uaWQgPT09IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKSkgYnV0dG9uc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnbmF2X19pdGVtLS1ibGFjaycpXG4gIH0pXG5cbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggIT09ICc/aW5kZXgnKSB7XG4gICAgcmVxdWVzdChlbmRQb2ludClcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwaW5uZXInKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdzcGlubmVyLS1oaWRkZW4nKVxuICAgIH0sIDUwMClcbiAgfVxufVxuXG5jb25zdCBzZWxlY3RDaGFyYWN0ZXIgPSAoZSkgPT4ge1xuICBsZXQgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpXG4gIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnYWxsJykgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKVxuICAgIGVsc2UgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSBjYXJkLmlkKSBjYXJkLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpXG4gIH0pXG59XG5cbnRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB3aW5kb3cubG9jYXRpb24uc2VhcmNoID0gJ2luZGV4JyB9KVxubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1lbnUpXG5jbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNZW51KVxuYnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dQYWdlKHBhdGhzW2luZGV4XSkpXG59KVxuc2VsZWN0cy5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gIGlmIChzZWxlY3QpIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4gc2VsZWN0Q2hhcmFjdGVyKGUpKVxufSlcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiBzaG93RGF0YSh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJykpKVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA3NjdweCknKS5tYXRjaGVzKSB7XG4gICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhcnJvdycpXG4gICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1leHBhbmQnKVxuICB9XG59KVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlKSA9PiB7XG4gIGlmIChBcnJheS5mcm9tKG5hdi5jbGFzc0xpc3QpLmluY2x1ZGVzKCduYXYtZXhwYW5kJykpIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICBpZiAoIUFycmF5LmZyb20obmF2LmNsYXNzTGlzdCkuaW5jbHVkZXMoJ25hdi1leHBhbmQnKSkgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnXG4gIGlmICghQXJyYXkuZnJvbShzcGlubmVyLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ3NwaW5uZXItLWhpZGRlbicpKSBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgaWYgKEFycmF5LmZyb20oc3Bpbm5lci5jbGFzc0xpc3QpLmluY2x1ZGVzKCdzcGlubmVyLS1oaWRkZW4nKSkgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnXG4gIGEgPSBkb2Muc2Nyb2xsVG9wXG59KVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCAoZSkgPT4ge1xuICBBcnJheS5mcm9tKG5hdi5jbGFzc0xpc3QpLmluY2x1ZGVzKCduYXYtZXhwYW5kJykgJiYgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICFBcnJheS5mcm9tKHNwaW5uZXIuY2xhc3NMaXN0KS5pbmNsdWRlcygnc3Bpbm5lci0taGlkZGVuJykgJiYgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGEgPSBkb2Muc2Nyb2xsVG9wXG59KVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChlKSA9PiB7XG4gIGIgPSBkb2Muc2Nyb2xsVG9wXG4gIGlmIChhIDwgYiAmJiBiID4gNzEpIGhlYWRlci5zdHlsZS50b3AgPSAnLTcxcHgnXG4gIGlmIChiIDwgNzEpIGhlYWRlci5zdHlsZS50b3AgPSAnMCdcbiAgaWYgKGEgPiBiKSBoZWFkZXIuc3R5bGUudG9wID0gJzAnXG59KVxuIl19
