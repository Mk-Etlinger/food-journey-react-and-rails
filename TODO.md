Todo: 
- [ ] Clean up reducers/redux store
- [x] Handle display format: Front End
- [ ] User authorization
- [ ] Oauth- FB/Gmail/Github
- [ ] formatted/printable meals list for easy reading

New Features:
- [ ] Mark ingredients as safe (e.g. I know cucumbers are fine. Ing. need to belong to users. Still keep data, but handle in view? e.g. Show safe foods checkbox)
- [ ] Visualize data with histogram of most symptomatic ingredients
- [ ] Add tags for certain food groups/compounds(FODMAP, Oxalate, Goitrogens, histamine, salicylates, purines)
- [ ] Calculate hours ago on Symptom form submit(grab user timezone with hidden form)
- [ ] Index meals AND symptoms by human readable date
- [ ] Encouraging quotes on Dashboard?
- [ ] Product templates (e.g. certain brands or products with multiple ing. add "yoplay yogurt")
- [ ] Autofill ingredients/symptoms or add new(Selectize? select or create)

Gems:
- [ ] snap photos and update later(Paperclip)


API(FoodFacts, USDA Nutrient DB, ESHA, MyNetDiary):
- [ ] Perhaps nutrient info can be externally linked, not necessary for this domain model.


Concerns:
- [ ] Will people actually use this? Is the UX hassle free and beyond easy?
- [ ] Does user having their own specific set of ingredients bog down the backend?
- [ ] Properly displaying meal data, by date? Calendar, date range, dropdown(all, last year, last 6 months, 3 months, day)
- [ ] Does this need to have a social aspect? E.G How are you feeling today? or a personal favorite recipe on a profile?
- [ ] Handle Time Zone? Symptoms relation to ing. based on occurred_at time.
