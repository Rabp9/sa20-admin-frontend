'use strict';

/**
 * @ngdoc service
 * @name sa20AdminFrontendApp.utilsViewService
 * @description
 * # utilsViewService
 * Factory in the sa20AdminFrontendApp.
 */
angular.module('sa20AdminFrontendApp')
.factory('$utilsViewService', function () {
    return {
        enable: function(id) {
            $(id).removeClass('disabled');
            $(id).prop('disabled', false);
        },
        disable: function(id) {
            $(id).addClass('disabled');
            $(id).prop('disabled', true);
        },
        setPropertyToAllItemsOfArrayObject: function(array, property, value) {
            angular.forEach(array, function(v_array, k_array) {
                v_array[property] = value;
            });
        },
        formatDate: function(fecha) {
            if (fecha === undefined) {
                return undefined;
            }
            return fecha.getFullYear() + '-' + this.str_pad((fecha.getMonth() + 1), '00') + '-' + this.str_pad(fecha.getDate(), '00');
        },
        formatDateTime: function(tiempo) {
            if (tiempo === undefined) {
                return undefined;
            }
            return tiempo.getFullYear() + '-' + 
                this.str_pad((tiempo.getMonth() + 1), '00') + '-' + 
                this.str_pad(tiempo.getDate(), '00') + ' ' +
                this.str_pad(tiempo.getHours(), '00') + ':' +
                this.str_pad(tiempo.getMinutes(), '00') + ':' +
                this.str_pad(tiempo.getSeconds(), '00');
        },
        str_pad: function(str, pad) {
            return pad.substring(0, (pad.length - str.toString().length)) + str;
        }
    };
});