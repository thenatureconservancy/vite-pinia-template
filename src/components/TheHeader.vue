<template>
  <q-toolbar elevated class="bg-primary text-white">
    <q-toolbar-title style="font-weight: 600">
      <span class="q-mr-sm">The Nature Conservancy</span>
      <span class="text-weight-light"> Project Title </span>
    </q-toolbar-title>
    <q-btn color="primary" dense unelevated icon="menu">
      <q-menu>
        <q-list style="min-width: 100px">
          <q-item clickable v-close-popup>
            <q-item-section
              ><a href="https://www.nature.org/en-us/" target="_blank"
                >The Nature Conservancy</a
              ></q-item-section
            >
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </q-toolbar>
</template>

<script setup></script>
