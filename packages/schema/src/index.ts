import { z } from 'zod'

export const EdgeIcon = z.enum([
  'attack',
  'defense',
  'skill',
  'resource',
  'link',
  'element'
])

export const CardType = z.enum([
  'unit',
  'hero',
  'spell',
  'relic',
  'structure'
])

export const Rarity = z.enum(['common', 'uncommon', 'rare'])

export const HexCard = z.object({
  id: z.string().uuid(),
  name: z.string(),
  type: CardType,
  rarity: Rarity,
  edges: z.tuple([
    EdgeIcon,
    EdgeIcon,
    EdgeIcon,
    EdgeIcon,
    EdgeIcon,
    EdgeIcon
  ]),
  tags: z.array(z.string()).default([]),
  description: z.string().optional(),
  image: z.string().url().optional()
})

export const BoosterPack = z.object({
  id: z.string().uuid(),
  playerId: z.string(),
  cards: z.array(HexCard)
})

export type EdgeIcon = z.infer<typeof EdgeIcon>
export type CardType = z.infer<typeof CardType>
export type Rarity = z.infer<typeof Rarity>
export type HexCard = z.infer<typeof HexCard>
export type BoosterPack = z.infer<typeof BoosterPack>

export {}
