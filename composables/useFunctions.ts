import FormService from "~/services/forms.service";
import { terrains } from "~/core/constant";

const isOpen = ref(false)
const searchQuery = ref('')
export const useFunctions = () => {
    const form = FormService.activeForm;
    const resetForm = FormService.clearForm;
    const filters = FormService.filters;

    const languageStore = useLanguageStore();
    const choiceLanguage = computed(() => languageStore.language);


    function changeLanguage(lang: any) {
        languageStore.setLanguage(lang);
    }

    function toggleMenu() {
        isOpen.value = !isOpen.value
    }

    function closeMenu() {
        isOpen.value = false
    }

    function handleResize() {
        if (window.innerWidth >= 992) {
            closeMenu()
        }
    }

    const detailsModalVisible = ref(false)
    const selectedTerrain = ref(null)

    const filteredTerrains = computed(() => {
        return terrains.value.filter((terrain) => {
      
          if (searchQuery.value) {
            const query = searchQuery.value.toLowerCase()
      
            const matchSearch =
              terrain.title.toLowerCase().includes(query) ||
              terrain.city.toLowerCase().includes(query) ||
              terrain.description.toLowerCase().includes(query)
      
            if (!matchSearch) return false
          }
      
          // 🏙 Ville
          if (filters.city && terrain.city !== filters.city) {
            return false
          }
      
          // 💰 Prix
          if (filters.priceRange) {
            const [min, max] = filters.priceRange
              .split("-")
              .map(v => parseInt(v.replace("+", "")))
      
            if (max) {
              if (terrain.price < min || terrain.price > max) return false
            } else {
              if (terrain.price < min) return false
            }
          }
      
          // 📏 Surface
          if (filters.surface) {
            const [min, max] = filters.surface
              .split("-")
              .map(v => parseInt(v.replace("+", "")))
      
            if (max) {
              if (terrain.surface < min || terrain.surface > max) return false
            } else {
              if (terrain.surface < min) return false
            }
          }
      
          // 📌 Statut
          if (filters.status && terrain.status !== filters.status) {
            return false
          }
      
          return true
        })
      })

      const resetFilters = () => {
          searchQuery.value = "";
        resetForm(filters)
      }
      
      

    const showTerrainDetails = (terrain: any) => {
        selectedTerrain.value = terrain
        detailsModalVisible.value = true
    }

    return {
        isOpen,
        filteredTerrains,
        searchQuery,
        filters,
        resetFilters,
        showTerrainDetails,
        toggleMenu,
        closeMenu,
        handleResize,
    }
}
