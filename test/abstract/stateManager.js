const StateManager = require('../../src/tools/abstract/stateManager')

module.exports = (expect) => {
    describe("It tests StateManager", () => {
        let stateManager

        beforeEach(() => {
            stateManager = StateManager({})
        })

        it(".createAction returns correctly", () => {
            const type = 'ClickEvent'
            const action = stateManager.createAction(type)
            expect(type).to.eql(action.type)
        })

    })
}