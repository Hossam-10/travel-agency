<template>
  <div
    class="bg-white border border-solid border-[#06162D40] rounded-tl-2xl rounded-br-2xl pt-4 md:pt-2 px-2 pb-6 mb-6 md:mb-[4.5625rem]"
  >
    <!--Radio button in large screens-->
    <div
      class="hidden md:flex items-center justify-center gap-5 pb-6 mb-5 border-b border-solid border-primary"
    >
      <template v-for="option in travelOptions" :key="option.value">
        <input
          type="radio"
          :id="option.value"
          :value="option.value"
          name="trip"
          class="hidden radio-input"
          :checked="option.value === selectedOption"
          @change="setSelectedOption"
        />
        <label
          :for="option.value"
          class="flex items-center cursor-pointer font-semibold radio-label"
          >{{ option.label }}</label
        >
      </template>
    </div>

    <!--select in small screens -->
    <div
      class="flex md:hidden justify-center pb-6 mb-5 border-b border-solid border-[#183867]"
    >
      <select class="border-none flex justify-between w-[7.4375rem]">
        <option
          v-for="option in travelOptions"
          :key="option.value"
          :value="option.value"
          :selected="option.value === selectedOption"
          @change="setSelectedOption"
        >
          {{ option.label }}
        </option>
      </select>
    </div>

    <!--Search inputs-->
    <div
      class="flex flex-col gap-2 md:gap-0 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <label class="font-bold mb-1 flex items-center gap-2">
          <IconFlightFrom />
          {{ $t("from") }}
        </label>
        <input type="text" class="w-full" :placeholder="$t('flightFrom')" />
      </div>
      <div>
        <label class="font-bold mb-1 flex items-center gap-2">
          <IconFlightTo />
          {{ $t("to") }}
        </label>
        <input type="text" class="w-full" :placeholder="$t('flightTo')" />
      </div>
      <div>
        <label class="font-bold mb-1 flex items-center gap-2">
          <IconCalendar />
          {{ $t("depart") }}
        </label>
        <input type="date" class="w-full" />
      </div>
      <div>
        <label class="font-bold mb-1 flex items-center gap-2">
          <IconCalendar />
          {{ $t("return") }}
        </label>
        <input type="date" class="w-full" />
      </div>
      <div>
        <label class="font-bold mb-1 flex items-center gap-2">
          <IconCabin />
          {{ $t("cabinClass") }}
        </label>
        <select class="p-2">
          <option
            class="flex items-center gap-2 p-2"
            v-for="cabinClass in cabinClasses"
            :key="cabinClass.value"
            :value="cabinClass.value"
            :selected="cabinClass.value === selectedCabinClass"
            @change="setCabinClass"
          >
            {{ cabinClass.label }}
          </option>
        </select>
      </div>
      <AppButton
        classContent="w-full md:w-16 h-12 bg-[#183867] md:bg-primary flex items-center justify-center gap-2"
      >
        <IconSearch />
        <span class="md:hidden">{{ $t("search") }}</span>
      </AppButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
type TravelOption = {
  label: string;
  value: string;
};
type CabinClass = {
  label: string;
  value: string;
};

const { t } = useI18n();
const travelOptions = ref<TravelOption[]>([
  {
    label: t("oneWay"),
    value: "oneWay",
  },
  {
    label: t("roundTrip"),
    value: "roundTrip",
  },
]);
const selectedOption = ref(travelOptions.value[1].value);
const setSelectedOption = (event: Event) => {
  selectedOption.value = (event.target as HTMLInputElement).value;
};

// cabin classes
const cabinClasses = ref<CabinClass[]>([
  {
    label: `1 ${t("adult")}, ${t("economy")}`,
    value: "economy",
  },
  {
    label: `2 ${t("adult")}, ${t("class")}`,
    value: "class",
  },
  {
    label: `2 ${t("adult")}, ${t("economy")}`,
    value: "economyTwoAdult",
  },
]);
const selectedCabinClass = ref(cabinClasses.value[0].value);
const setCabinClass = (event: Event) => {
  selectedCabinClass.value = (event.target as HTMLInputElement).value;
};
</script>

<style scoped>
.radio-label::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-inline-end: 0.5rem;
  border: 2px solid theme("colors.primary.DEFAULT");
  border-radius: 50%;
  position: relative;
  padding: 2px;
  box-sizing: border-box;
  transition: background 0.3s;
}
.radio-input:checked + .radio-label::before {
  background-color: theme("colors.primary.DEFAULT");
}
.radio-input:checked + .radio-label::before {
  padding: 2px;
}

input,
select {
  background-color: transparent;
  outline: none;
  color: #7c8db0;
}
input::placeholder {
  color: #7c8db0;
}
input:focus,
select:focus:not(:first-child) {
  border-bottom: 2px solid theme("colors.primary.DEFAULT");
}
</style>
