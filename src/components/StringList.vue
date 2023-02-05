<template>
    <v-app-bar height="auto">
      <v-row no-gutters justify="center" align="center" >
          <v-row justify="center" align="center" class="main-block">
            <v-col class="v-col-lg-2 v-col-sm-2 v-col-md-2 v-col-12" >
              <v-toolbar-title align="center">
                <v-btn @click="goto(this.data[0])">Первая</v-btn>
              </v-toolbar-title>
            </v-col>
            <v-col class="v-col-lg-6 v-col-sm-6 v-col-md-6 v-col-12">
              <v-toolbar-title>
                  <v-text-field
                    label="Перейти"
                    v-model="searchIndex"
                    append-inner-icon="mdi-magnify"
                    variant="outlined"
                    class="mt-5"
                    @click:append-inner="goto(this.data[searchIndex])"
                  >
                  </v-text-field>
              </v-toolbar-title>
            </v-col>
            <v-col class="v-col-lg-2 v-col-sm-2 v-col-md-2 v-col-12">
              <v-toolbar-title align="center">
                <v-btn variant="prepend" @click="goto(this.data[searchIndex])"> Перейти </v-btn>
              </v-toolbar-title>
            </v-col>
            <v-col class="v-col-lg-2 v-col-sm-2 v-col-md-2 v-col-12">
              <v-toolbar-title align="center">
                <v-btn @click="goto(this.data[this.data.length - 1])">Последняя</v-btn>
              </v-toolbar-title>
            </v-col>
          </v-row>
      </v-row>
    </v-app-bar>
  <v-app id="inspire" >
    <v-main class="bg-grey-lighten-2 align-center">
      <v-container class="d-flex justify-center fill-height">
        <v-row class="main-block mh-content">
          <v-col
            class="mt-2 d-flex align-center justify-center"
            cols="12"
            v-if="data.length === 0"
          >
            <v-progress-circular
              indeterminate
            ></v-progress-circular>
          </v-col>
          <template v-else v-for="n in this.data" :key="n">
            <v-col
              class="mt-2 d-flex align-center justify-center"
              cols="12"
            >
              <strong :ref="n">{{ n }}</strong>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LoremClass from "@/Store/LoremClass";
import main from "../styles/main.css"

export default {
  data: () => ({
    data: [],
    searchIndex: ''
  }),
  methods: {
    async setData() {
      const Lorem = new LoremClass();
      await Lorem.init().then(() => {
        this.data = Lorem.get();
      });
    },
    goto(refName) {
      ({...this.$refs[refName]}[0]?.scrollIntoView({ behavior: 'smooth' }))
    }
  },
  mounted() {
    this.setData();
  }
}
</script>
