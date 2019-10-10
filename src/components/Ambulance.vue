<template>

    <v-container fluid>
        <v-layout row>
            <v-flex>
                <gmap-map
                        :center="center"
                        :zoom="12"
                        style="width:1200px;  height: 800px;"
                >
                    <gmap-marker
                            :key="index"
                            v-for="(m, index) in markers"
                            :position="m.position"
                            @click="center=m.position"
                    ></gmap-marker>
                </gmap-map>
            </v-flex>
        </v-layout>
    </v-container>
<!--    <div>-->
<!--        <div>-->
<!--            <v-container>-->
<!--                <ul id="example-1">-->
<!--                    <li v-for="item in data">-->
<!--                        {{ item }}-->
<!--                    </li>-->
<!--                </ul>-->
<!--            </v-container>-->
<!--        </div>-->
<!--        <div>-->
<!--            <h2>Search and add a pin</h2>-->
<!--            <label>-->
<!--                <gmap-autocomplete-->
<!--                        @place_changed="setPlace">-->
<!--                </gmap-autocomplete>-->
<!--                <button @click="addMarker">Add</button>-->
<!--            </label>-->
<!--            <br/>-->

<!--        </div>-->
<!--        <br>-->

<!--    </div>-->
</template>

<script>
    import {Firestore} from '../config';
    export default {
        name: "GoogleMap",
        data() {
            return {
                center: { lat: 45.508, lng: -73.587 },
                markers: [],
                places: [],
                currentPlace: null,
                data:[],
            };
        },

        mounted() {
            this.geolocate();
            this.getData()
        },

        methods: {
            async getData() {
                const ref = Firestore.collection('Ambulance');
                await ref.onSnapshot(querySnapshot => {
                    this.data = [];
                    querySnapshot.forEach(doc => {
                        this.data.push(doc.data());
                    });
                }, err => {
                    console.log(`Encountered error: ${err}`);
                });
            },
            setPlace(place) {
                this.currentPlace = place;
            },
            addMarker() {
                if (this.currentPlace) {
                    const marker = {
                        lat: this.currentPlace.geometry.location.lat(),
                        lng: this.currentPlace.geometry.location.lng()
                    };
                    this.markers.push({ position: marker });
                    this.places.push(this.currentPlace);
                    this.center = marker;
                    this.currentPlace = null;
                }
            },
            geolocate: function() {
                navigator.geolocation.getCurrentPosition(position => {
                    this.center = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                });
            }
        }
    };
</script>
