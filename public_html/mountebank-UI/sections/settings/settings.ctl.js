angular.module('myApp')

        .controller('SettingsCtrl', function ($scope, $log, TPL_PATH,
                ImpostersService, currentImposter, collectionItems) {
            var vm = this;

            vm.currentImposter = currentImposter;
            vm.mounteBankUrl = "http://localhost:4545";
            vm.headerLocation = TPL_PATH + "partials/plainHeader.tpl.html"
            vm.currentCollectionIdx = vm.currentImposter.id; // the index into the collection array
            vm.collectionSelectorIdx = vm.currentCollectionIdx.toString();
            vm.collectionItems = collectionItems;


            vm.changeCollection = function ()
            {

                $log.debug("called change collection")
                vm.currentCollectionIdx = parseInt(vm.collectionSelectorIdx);
                ImpostersService.setCollectionTo(vm.currentCollectionIdx);
                vm.currentImposter = ImpostersService.getCurrentImposter();
            }



            /**
             * update the text in the boxes when editing the description
             * @returns {undefined}
             */
            vm.updateList = function ()
            {
                vm.collectionItems = ImpostersService.getCollectionItems();
            }

            vm.createNewCollection = function ()
            {
                ImpostersService.createNewCollection();
                vm.currentImposter = ImpostersService.getCurrentImposter();
                vm.collectionItems = ImpostersService.getCollectionItems();
                vm.currentCollectionIdx = vm.currentImposter.id; // the index into the collection array
                vm.collectionSelectorIdx = vm.currentCollectionIdx.toString();
            }

        });
