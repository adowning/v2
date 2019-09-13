<template>
  <v-row
      
      :key="n"
      :class="n === 1 ? 'mb-6' : ''"
      no-gutters
    >
      <v-col
      
       
      >
    <v-dialog :fullscreen="$vuetify.breakpoint.xs" width="500" transition="dialog-bottom-transition" v-model="show">
        <v-card>
            <v-toolbar dark color="primary">
                <v-btn icon dark @click="show = false">
                    <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>Select an Avatar</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-layout row wrap v-if="avatars">
                <v-flex
                    v-for="avatar in avatars"
                    :key="avatar.id"
                    xs4 sm3
                    d-flex>
                    <v-card tile flat class="d-flex">
                        <v-card-text class="d-flex">
                            <v-avatar
                                size="96"
                                @click="selectAvatar(avatar)"
                                class="avatar-picker-avatar"
                                :class="{ 'current': avatar.id === currentAvatar }">
                                <img :src="'/avatars/' + (avatar.path)">
                            </v-avatar>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-card>
    </v-dialog>
      </v-col>
      <v-col>
          <template>


      <v-timeline
        align-top
        dense
      >
        <v-timeline-item
          color="pink"
          small
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>5pm</strong>
            </v-col>
            <v-col>
              <strong>New Icon</strong>
              <div class="caption">Mobile App</div>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="teal lighten-3"
          small
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>3-4pm</strong>
            </v-col>
            <v-col>
              <strong>Design Stand Up</strong>
              <div class="caption mb-2">Hangouts</div>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                ></v-img>
              </v-avatar>
              <v-avatar>

                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                ></v-img>
              </v-avatar>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                ></v-img>
              </v-avatar>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="pink"
          small
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>12pm</strong>
            </v-col>
            <v-col>
              <strong>Lunch break</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="teal lighten-3"
          small
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>9-11am</strong>
            </v-col>
            <v-col>
              <strong>Finish Home Screen</strong>
              <div class="caption">Web App</div>
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
    
</template>
</v-col>
    </v-row>
</template>

<script>
    export default {
        props: {
            currentAvatar: {
                type: String,
                required: true
            },
            value: Boolean
        },
        async mounted () {
            await this.$store.dispatch('fetchAvatars')
        },
        computed: {
            avatars () {
                return this.$store.state.avatars
            },
            show: {
                get () {
                    return this.value
                },
                set (value) {
                    this.$emit('input', value)
                }
            }
        },
        methods: {
            selectAvatar (avatar) {
                this.$emit('selected', avatar.id)
                this.show = false
            }
        }
    }
</script>