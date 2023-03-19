import create from "zustand"

export default create((set) => {
	return {
		popupId: -1,

		setMessageId: (id) => {
			set(() => {
				return { messageId: id }
			})
		},
	}
})
