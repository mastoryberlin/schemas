<template>
  <Fragment v-bind="props" :data="fragmentData"></Fragment>
</template>

<script setup lang="ts">
import type { AnyStateMachine, AnyActorRef } from "xstate";
import { defu } from "defu";

import type { BaseFragment, FragmentClass } from '~/types/schema'

const props = withDefaults(defineProps<{
  attach: (id: string, machine: AnyStateMachine) => AnyActorRef
  detach: (id: string) => void
  actor: AnyActorRef
  data: { self: FragmentClass['Intent'], children: BaseFragment[] }
}>(), {})

const fragmentData = computed(() => {
  // access specialized properties of the Intent fragment class
  const {
    self: {
      id,
      model,
      onlyInStates,
      uiElements,
      intendedEffectRadius,
    },
    children,
  } = props.data

  // "translate" specialized properties into properties of the base fragment schema
  const translatedFragmentData = {
    self: {},
    children,
  }
  return defu(translatedFragmentData, props.data)
})
</script>